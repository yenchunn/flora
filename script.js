let currentIndex = 0;
    function moveSlide(step) {
        const slides = document.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        // 移除當前 active
        slides[currentIndex].classList.remove('active');
        
        // 計算新索引
        currentIndex = (currentIndex + step + slides.length) % slides.length;
        
        // 加入新 active
        slides[currentIndex].classList.add('active');
    }

    function rwdImageMap() {
        const maps = document.getElementsByTagName('map');
        for (let map of maps) {
            const img = document.querySelector(`img[usemap="#${map.name}"]`);
            if (!img) continue;
    
            const ratio = img.clientWidth / img.naturalWidth; // 計算縮放比例
            const areas = map.getElementsByTagName('area');
    
            for (let area of areas) {
                if (!area.dataset.coords) area.dataset.coords = area.coords; // 備份原始座標
                
                const coords = area.dataset.coords.split(',');
                const scaledCoords = coords.map(c => Math.round(c * ratio));
                area.coords = scaledCoords.join(',');
            }
        }
    }
    
    // 監聽圖片載入與視窗縮放
    window.addEventListener('load', rwdImageMap);
    window.addEventListener('resize', rwdImageMap);

let currentIndex = 0;
let autoPlayInterval = null;

// 切換幻燈片
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    
    if (slides.length === 0) return;

    // 移除當前 active
    slides[currentIndex].classList.remove('active');
    if (dots[currentIndex]) {
        dots[currentIndex].classList.remove('active');
    }
    
    // 計算新索引
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    
    // 加入新 active
    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
    
    // 重新調整圖片地圖
    rwdImageMap();
}

// ========================================
// 輪播廣告功能
// ========================================

let currentIndex = 0;
let autoPlayInterval = null;

// 切換幻燈片
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    
    if (slides.length === 0) return;

    // 移除當前 active
    slides[currentIndex].classList.remove('active');
    if (dots[currentIndex]) {
        dots[currentIndex].classList.remove('active');
    }
    
    // 計算新索引
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    
    // 加入新 active
    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
    
    // 重新調整圖片地圖
    rwdImageMap();
}

// 自動輪播
function startAutoPlay() {
    // 清除舊的定時器（避免重複）
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
    
    // 每 5 秒自動切換到下一張
    autoPlayInterval = setInterval(() => {
        moveSlide(1);
    }, 5000); // 5000ms = 5秒
}

// 停止自動輪播
function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}
