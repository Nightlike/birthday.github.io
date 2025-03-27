// 进入页面先弹窗询问
window.onload = function() {
    if (confirm("🎁 准备好打开礼物了吗？")) {
        // 替换为你的图片路径
        document.getElementById('giftImage').src = "1743060797461.png";
        document.getElementById('giftImage').classList.add('show');
    }

    // 生成泡泡
    createBubbles();
};

// 音乐控制
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "🎵 关闭音乐";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🎵 播放音乐";
    }
});

// 创建泡泡
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // 随机大小和位置
        const size = Math.random() * 60 + 20;
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}%`;
        bubble.style.animationDelay = `${delay}s`;
        
        bubblesContainer.appendChild(bubble);
    }
}