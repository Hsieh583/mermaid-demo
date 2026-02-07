# Mermaid 圖表示範網站

這是一個功能完整的 Mermaid 圖表示範網站，提供多種圖表模板供學習和使用。

## 🎯 功能特色

- **12 種圖表模板**：涵蓋 IT 專案和企業簡報需求
  - IT 專案模板：流程圖、序列圖、類別圖、狀態圖、實體關係圖、Git 圖
  - 企業簡報模板：甘特圖、圓餅圖、使用者旅程、心智圖、時間軸、象限圖

- **即時預覽**：修改語法後即時查看圖表變化
- **語法編輯**：直接在網頁上編輯 Mermaid 語法
- **恢復預設**：一鍵恢復原始範例程式碼
- **響應式設計**：支援各種裝置螢幕尺寸

## 📦 快速開始

### 方法一：直接開啟 HTML 檔案

1. 下載或克隆此儲存庫
2. 用瀏覽器直接開啟 `index.html`

### 方法二：使用本地伺服器（推薦）

使用 Python 內建的 HTTP 伺服器：

```bash
python3 -m http.server 8080
```

然後在瀏覽器中開啟 `http://localhost:8080`

或使用 Node.js 的 http-server：

```bash
npx http-server -p 8080
```

### 方法三：部署到 GitHub Pages

1. 將此儲存庫 push 到 GitHub
2. 在儲存庫設定中啟用 GitHub Pages
3. 選擇 main 分支作為來源
4. 網站將自動部署到 `https://yourusername.github.io/mermaid-demo/`

## 📂 專案結構

```
mermaid-demo/
├── index.html              # 主頁
├── styles.css              # 主頁樣式
├── templates/              # 模板資料夾
│   ├── template.css        # 模板共用樣式
│   ├── template.js         # 模板共用腳本
│   ├── flowchart.html      # 流程圖模板
│   ├── sequence.html       # 序列圖模板
│   ├── class.html          # 類別圖模板
│   ├── state.html          # 狀態圖模板
│   ├── er.html             # 實體關係圖模板
│   ├── git.html            # Git 圖模板
│   ├── gantt.html          # 甘特圖模板
│   ├── pie.html            # 圓餅圖模板
│   ├── journey.html        # 使用者旅程模板
│   ├── mindmap.html        # 心智圖模板
│   ├── timeline.html       # 時間軸模板
│   └── quadrant.html       # 象限圖模板
└── README.md               # 說明文件
```

## 🎨 使用方式

1. **瀏覽模板**：在首頁選擇您需要的圖表類型
2. **編輯語法**：在左側編輯器中修改 Mermaid 語法
3. **查看預覽**：右側會即時顯示圖表預覽
4. **更新圖表**：可點擊「更新預覽」按鈕手動刷新
5. **恢復預設**：點擊「恢復預設」按鈕回到原始範例

## 🔧 技術棧

- **HTML5 / CSS3**：網頁結構和樣式
- **JavaScript (ES6+)**：互動功能
- **Mermaid.js**：圖表渲染引擎

## 📝 Mermaid 語法資源

- [官方文件](https://mermaid.js.org/)
- [語法指南](https://mermaid.js.org/intro/syntax-reference.html)
- [即時編輯器](https://mermaid.live/)

## 🚀 自訂擴展

### 新增自己的模板

1. 複製任一模板 HTML 檔案
2. 修改標題和說明
3. 替換 `defaultCode` 變數中的範例程式碼
4. 在 `index.html` 中新增連結

### 修改樣式

- 修改 `styles.css` 更改主頁樣式
- 修改 `templates/template.css` 更改模板頁面樣式
- 在 `template.js` 的 `mermaid.initialize()` 中更改主題

## ⚠️ 注意事項

- 此網站依賴 CDN 載入 Mermaid.js 函式庫，需要網際網路連線
- 首次載入可能需要幾秒鐘來載入 Mermaid.js
- 建議使用現代瀏覽器（Chrome、Firefox、Safari、Edge）

## 📄 授權

本專案採用 MIT 授權條款

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📧 聯絡方式

如有問題或建議，請透過 GitHub Issues 聯繫

