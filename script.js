

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

// ——— 배너 위치 & 다음 섹션 여백 보정 ———
function updateBannerPosition() {
  const header       = document.querySelector('header');
  const banner       = document.querySelector('.banner');
  const firstSection = document.querySelector('.sections'); // 필요시 클래스 변경

  if (!header || !banner) return;
  // 1) 이전 설정 초기화
  banner.style.marginTop   = '';
  if (firstSection) firstSection.style.marginTop = '';

  // 2) 현재 보이는 슬라이드 이미지 높이 구하기
  const currentImg = banner.querySelector('img.slide[style*="display: block"]')
                   || banner.querySelector('img.slide');
  const imgH = currentImg ? currentImg.offsetHeight : 0;

  // 3) header 바로 아래로 배너 띄우기 (갭만큼만 위로)
  const gap = banner.getBoundingClientRect().top - header.offsetHeight;
  if (gap > 0) {
    banner.style.marginTop = `-${gap}px`;
  }

  // 4) 이미지 높이만큼 첫 섹션(.sections) 아래로 밀기
  if (firstSection && imgH > 0) {
    firstSection.style.marginTop = `${imgH}px`;
  }
}

// load / resize / 이미지 로드 시 모두 재계산
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

//floating 
document.addEventListener('DOMContentLoaded', function() {
  const phoneBtn = document.querySelector('.fab-phone');
  if (!phoneBtn) return;

  phoneBtn.addEventListener('click', function(e) {
    // PC 판정: 윈도우 가로 폭 > 840px
    if (window.innerWidth > 840) {
      e.preventDefault();
      alert('서울참정형외과 전화번호 : 051-791-1300');
    }
    // 모바일(<=840px)이면 e.preventDefault() 없이 tel: 동작
  });
});

