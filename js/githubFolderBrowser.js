// GitHub klasör tarayıcı - Tarih bazlı Excel dosyaları

const GitHubFolderBrowser = {
    settings: {
        repoOwner: 'karincalogistics-com',
        repoName: 'karinca-dashboard',
        branch: 'main',
        folderPath: 'excel',
        // Hem 2024-12-04 hem 04.12.2024 formatlarını destekle
        filePattern: /^(\d{4}-\d{2}-\d{2}|\d{2}\.\d{2}\.\d{4})\.(xlsx|xls|csv)$/i
    },

    // GitHub klasöründeki dosyaları listele
    async listFiles() {
        try {
            const { repoOwner, repoName, branch, folderPath } = this.settings;
            
            // GitHub API URL
            const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}?ref=${branch}`;
            
            console.log('📂 GitHub klasörü taranıyor:', apiUrl);
            
            const response = await fetch(apiUrl, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`GitHub API hatası: ${response.status}`);
            }
            
            const files = await response.json();
            
            // Sadece tarih formatındaki dosyaları filtrele
            const dateFiles = files
                .filter(file => file.type === 'file')
                .filter(file => this.settings.filePattern.test(file.name))
                .map(file => ({
                    name: file.name,
                    date: this.extractDate(file.name),
                    downloadUrl: file.download_url,
                    size: file.size
                }))
                .sort((a, b) => new Date(b.date) - new Date(a.date)); // Yeniden eskiye
            
            console.log('✅ Dosyalar bulundu:', dateFiles.length);
            return dateFiles;
            
        } catch (error) {
            console.error('❌ GitHub klasör tarama hatası:', error);
            throw error;
        }
    },

    // Dosya adından tarihi çıkar
    extractDate(filename) {
        // 2024-12-04 formatı
        let match = filename.match(/^(\d{4}-\d{2}-\d{2})/);
        if (match) return match[1];
        
        // 04.12.2024 formatı -> 2024-12-04'e çevir
        match = filename.match(/^(\d{2})\.(\d{2})\.(\d{4})/);
        if (match) {
            const [, day, month, year] = match;
            return `${year}-${month}-${day}`;
        }
        
        return null;
    },

    // Tarihi formatla (2024-12-04 -> 04.12.2024 Çarşamba)
    formatDate(dateStr) {
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        
        const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        const dayName = days[date.getDay()];
        
        return {
            formatted: `${day}.${month}.${year}`,
            dayName: dayName,
            full: `${day}.${month}.${year} ${dayName}`
        };
    },

    // Tarih seçici tablosunu render et
    async renderDateTable() {
        try {
            const files = await this.listFiles();
            
            if (files.length === 0) {
                return '<div class="no-files">📁 Henüz tarih bazlı Excel dosyası yok</div>';
            }
            
            let html = `
                <div class="github-date-selector">
                    <div class="date-selector-header">
                        <h3>📊 Veriler</h3>
                        <div class="date-selector-actions">
                            <button class="btn btn-sm" onclick="GitHubFolderBrowser.refreshFiles()">
                                🔄 Yenile
                            </button>
                        </div>
                    </div>
                    <div class="date-table-wrapper">
                        <table class="date-table">
                            <thead>
                                <tr>
                                    <th>Tarih</th>
                                    <th>Dosya</th>
                                    <th>Boyut</th>
                                    <th>İşlem</th>
                                </tr>
                            </thead>
                            <tbody>
            `;
            
            files.forEach(file => {
                const dateInfo = this.formatDate(file.date);
                const sizeKB = (file.size / 1024).toFixed(2);
                
                html += `
                    <tr class="date-row" data-date="${file.date}" data-url="${file.downloadUrl}">
                        <td class="date-cell">
                            <strong>${dateInfo.formatted}</strong>
                            <small>${dateInfo.dayName}</small>
                        </td>
                        <td>${file.name}</td>
                        <td>${sizeKB} KB</td>
                        <td>
                            <button class="btn btn-sm btn-primary" 
                                onclick="GitHubFolderBrowser.loadFile('${file.downloadUrl}', '${file.name}', this)">
                                📥 Yükle
                            </button>
                        </td>
                    </tr>
                `;
            });
            
            html += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            
            return html;
            
        } catch (error) {
            console.error('❌ Tablo render hatası:', error);
            return `<div class="error-message">❌ Dosyalar yüklenemedi: ${error.message}</div>`;
        }
    },

    // Dosyayı yükle ve işle
    async loadFile(url, filename, buttonElement) {
        try {
            console.log('📥 Dosya yükleniyor:', filename);
            
            // Butonu devre dışı bırak ve loading göster
            if (buttonElement) {
                buttonElement.disabled = true;
                buttonElement.innerHTML = '⏳ Yükleniyor...';
                buttonElement.style.opacity = '0.6';
            }
            
            if (!window.Utils) {
                throw new Error('Utils modülü yüklenmedi');
            }
            
            Utils.showLoading(`${filename} yükleniyor...`);
            
            // Dosyayı çek
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const blob = await response.blob();
            const file = new File([blob], filename, { type: blob.type });
            
            // processFile ile işle
            if (window.processFile) {
                await window.processFile(file);
                Utils.showNotification(`✅ ${filename} başarıyla yüklendi`, 'success');
            } else {
                throw new Error('processFile fonksiyonu bulunamadı');
            }
            
            Utils.hideLoading();
            
            // Butonu geri getir
            if (buttonElement) {
                buttonElement.innerHTML = '✅ Yüklendi';
                buttonElement.style.opacity = '1';
                setTimeout(() => {
                    buttonElement.innerHTML = '📥 Yükle';
                    buttonElement.disabled = false;
                }, 2000);
            }
            
        } catch (error) {
            Utils.hideLoading();
            console.error('❌ Dosya yükleme hatası:', error);
            Utils.showNotification(`❌ Hata: ${error.message}`, 'error');
            
            // Butonu geri getir
            if (buttonElement) {
                buttonElement.innerHTML = '❌ Hata';
                buttonElement.style.opacity = '1';
                setTimeout(() => {
                    buttonElement.innerHTML = '📥 Yükle';
                    buttonElement.disabled = false;
                }, 2000);
            }
        }
    },

    // Dosya listesini yenile
    async refreshFiles() {
        const container = document.getElementById('github-date-selector-container');
        if (!container) return;
        
        container.innerHTML = '<div class="loading">🔄 Yenileniyor...</div>';
        
        const html = await this.renderDateTable();
        container.innerHTML = html;
    },

    // Ayarları güncelle
    updateSettings(settings) {
        this.settings = { ...this.settings, ...settings };
        localStorage.setItem('github_folder_settings', JSON.stringify(this.settings));
    },

    // Ayarları yükle
    loadSettings() {
        const saved = localStorage.getItem('github_folder_settings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
        return this.settings;
    }
};

// Global erişim
window.GitHubFolderBrowser = GitHubFolderBrowser;
