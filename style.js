// 界面美化配置
const styleConfig = {
    // 颜色主题
    colors: {
        primary: '#4B5563',
        secondary: '#6B7280',
        accent: '#3B82F6',
        background: '#F9FAFB',
        cardBg: '#FFFFFF',
        text: '#1F2937',
        textLight: '#6B7280',
        border: '#E5E7EB',
        shadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)'
    },
    
    // 动画配置
    animations: {
        transitionSpeed: '0.3s',
        easing: 'ease-in-out'
    }
};

// 动态添加CSS样式
function initStyles() {
    // 创建样式元素
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* 滚动条样式 */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
        }

        /* 背景图案 */
        body {
            background-color: #f9fafb;
            background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
            background-size: 20px 20px;
        }

        /* 卡片悬停效果 */
        .card-hover {
            transition: all ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* 按钮过渡效果 */
        .btn-transition {
            transition: all ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        /* 导航链接悬停效果 */
        .nav-link {
            position: relative;
            transition: color ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        .nav-link:hover {
            color: ${styleConfig.colors.accent};
        }

        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: ${styleConfig.colors.accent};
            transition: width ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        .nav-link:hover::after {
            width: 100%;
        }

        /* 移动端菜单过渡 */
        .mobile-menu {
            transition: transform ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        /* 图片放大过渡 */
        .zoom-modal {
            transition: opacity ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        .zoom-image {
            transition: transform ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        /* 加载动画 */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
            animation: fadeIn ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        /* 代码块样式 */
        pre {
            transition: all ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        pre:hover {
            box-shadow: ${styleConfig.colors.shadow};
        }

        /* 搜索框样式 */
        .search-input {
            transition: all ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        .search-input:focus {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* 面包屑导航样式 */
        .breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            color: ${styleConfig.colors.textLight};
        }

        .breadcrumb-item {
            transition: color ${styleConfig.animations.transitionSpeed} ${styleConfig.animations.easing};
        }

        .breadcrumb-item:hover {
            color: ${styleConfig.colors.accent};
        }

        .breadcrumb-separator {
            color: ${styleConfig.colors.border};
        }
    `;
    
    // 添加到头部
    document.head.appendChild(styleElement);
}

// 动态主题切换功能
function initThemeSwitcher() {
    // 检查本地存储的主题偏好
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // 设置初始主题
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
}

// 初始化所有样式功能
document.addEventListener('DOMContentLoaded', () => {
    initStyles();
    initThemeSwitcher();
});

// 导出配置供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { styleConfig, initStyles, initThemeSwitcher };
}
