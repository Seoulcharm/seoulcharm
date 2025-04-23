

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
  const header = document.querySelector('header');
  const banner = document.querySelector('.banner');
  if (!header || !banner) return;

  // 이전에 설정한 margin-top 초기화
  banner.style.marginTop = '';

  // 배너 컨테이너의 화면 상단 위치
  const bannerRect = banner.getBoundingClientRect();
  const headerHeight = header.offsetHeight;

  // header 바로 아래가 배너 top이 되도록 gap만큼만 보정
  const gap = bannerRect.top - headerHeight;
  if (gap > 0) {
    banner.style.marginTop = `-${gap}px`;
  }
}

// load/resize/이미지 로드 시 모두 실행
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

