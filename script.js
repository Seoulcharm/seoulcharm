

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


  // 배너 여백 조절
  function updateBannerMargin() {
    const banner = document.querySelector('.banner');
    if (!banner) return;
    const bannerImage = banner.querySelector('img.slide[style*="display: block"]') ||
      banner.querySelector('img.slide');
    if (bannerImage) {
      const imgHeight = bannerImage.offsetHeight;
      banner.style.marginBottom = imgHeight + 'px';
    }
  }
  window.addEventListener('load', updateBannerMargin);
  window.addEventListener('resize', updateBannerMargin);


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
    hamburger.addEventListener('click', function() {
      navContainer.classList.toggle('open');
    });
  });
