// Mermaid 模板頁面共用腳本
let storedDefaultCode = '';

// 初始化
function init(initialCode) {
    storedDefaultCode = initialCode;
    const editor = document.getElementById('code-editor');
    editor.value = initialCode;
    
    // 等待 mermaid 載入後才初始化
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'Microsoft JhengHei, Arial, sans-serif'
        });
        updatePreview();
    } else {
        console.error('Mermaid library not loaded');
        document.getElementById('preview').innerHTML = '<p style="color: #e74c3c;">⚠️ 無法載入 Mermaid 函式庫</p>';
    }
    
    // 設定事件監聽
    document.getElementById('update-btn').addEventListener('click', updatePreview);
    document.getElementById('reset-btn').addEventListener('click', resetToDefault);
    
    // 編輯器即時更新（延遲以提升性能）
    let timeout;
    editor.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(updatePreview, 500);
    });
}

// 更新預覽
async function updatePreview() {
    const code = document.getElementById('code-editor').value;
    const preview = document.getElementById('preview');
    const errorDiv = document.getElementById('error-message');
    
    if (typeof mermaid === 'undefined') {
        preview.innerHTML = '<p style="color: #e74c3c;">⚠️ Mermaid 函式庫未載入</p>';
        return;
    }
    
    try {
        // 清除舊內容
        preview.innerHTML = '';
        if (errorDiv) errorDiv.style.display = 'none';
        
        // 生成新圖表
        const { svg } = await mermaid.render('mermaid-diagram', code);
        preview.innerHTML = svg;
        
    } catch (error) {
        console.error('Mermaid rendering error:', error);
        preview.innerHTML = '<p style="color: #e74c3c;">⚠️ 圖表渲染失敗</p>';
        
        if (errorDiv) {
            errorDiv.textContent = `錯誤：${error.message}`;
            errorDiv.style.display = 'block';
        }
    }
}

// 恢復預設值
function resetToDefault() {
    if (confirm('確定要恢復到預設範例嗎？')) {
        document.getElementById('code-editor').value = storedDefaultCode;
        updatePreview();
    }
}
