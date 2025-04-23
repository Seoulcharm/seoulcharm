

  // 슬라이드
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);
  setInterval(nextSlide, 3000);


  // Header scroll 효과
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


// ————— 배너 위치 보정 —————
function updateBannerPosition() {
  const header   = document.querySelector('header');
  const banner   = document.querySelector('.banner');
  const sections = document.querySelector('.sections'); // 겹치는 섹션

  if (!header || !banner || !sections) return;

  // 1) 이전에 설정한 margin 초기화
  banner.style.marginTop   = '';
  sections.style.marginTop = '';

  // 2) header 바로 아래에 붙이기
  const bannerRect  = banner.getBoundingClientRect();
  const headerH     = header.offsetHeight;
  const gap         = bannerRect.top - headerH;
  if (gap > 0) {
    banner.style.marginTop = `-${gap}px`;
  }

  // 3) 배너 높이만큼 .sections를 밀어내기
  const bannerH = banner.offsetHeight;
  sections.style.marginTop = `${bannerH}px`;
}

// load/resize/image-load 시 실행
window.addEventListener('load',  updateBannerPosition);
window.addEventListener('resize', updateBannerPosition);
document.querySelectorAll('.banner img').forEach(img =>
  img.addEventListener('load', updateBannerPosition)
);

  // PC/모바일 공용 서브메뉴 토글 (a 태그에 이벤트 적용)
  document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav ul.main-menu > li > a');
    menuLinks.forEach(link => {
      const subMenu = link.parentElement.querySelector('ul.sub-menu');
      if (subMenu) {
        link.addEventListener('click', function(e) {
          e.preventDefault(); // 기본 링크 이동 막기
          subMenu.classList.toggle('open');
          // 다른 서브메뉴 닫기
          document.querySelectorAll('nav ul.main-menu > li > ul.sub-menu').forEach(menu => {
            if (menu !== subMenu) {
              menu.classList.remove('open');
            }
          });
        });
      }
    });
  });

  // Hamburger toggle script
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navContainer = document.getElementById('nav-container');
  const drawerClose  = document.getElementById('drawer-close');
    hamburger.addEventListener('click', function() {
      navContainer.classList.toggle('open');
    });
  // X 버튼 클릭 → 드로어 닫기
  drawerClose.addEventListener('click', () => {
    navContainer.classList.remove('open');
  });
  });

