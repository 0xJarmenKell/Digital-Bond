import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import Swiper from 'swiper';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
// let Waypoint: any;
// import('waypoints/lib/noframework.waypoints').then(module => {
//   Waypoint = module;
// });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.toggleScrolled();
    this.mobileNavToogle();
    this.preloader();
    this.toggleScrollTop();
    this.aosInit();
    this.initSwiper();
    this.faqToggle();
    // this.skillsAnimation();
    this.initIsotopeLayout();
    this.navmenuScrollspy();
    this.correctScrollPositionOnLoad();
  }

  toggleScrolled(): void {
    const selectBody = document.querySelector('body') as HTMLElement;
    const selectHeader = document.querySelector('#header') as HTMLElement;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    });
  }

  mobileNavToogle(): void {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;
    mobileNavToggleBtn.addEventListener('click', () => {
      document.querySelector('body')?.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    });
  }

  preloader(): void {
    const preloader = document.querySelector('#preloader') as HTMLElement;
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }

  toggleScrollTop(): void {
    const scrollTop = document.querySelector('.scroll-top') as HTMLElement;
    if (scrollTop) {
      window.addEventListener('scroll', () => {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      });

      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  aosInit(): void {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
  }

  initSwiper(): void {
    window.addEventListener("load", () => {
      document.querySelectorAll<HTMLElement>(".init-swiper").forEach(swiperElement => {
        const swiperConfigElement = swiperElement.querySelector(".swiper-config");
        if (swiperConfigElement) {  // Ensure the element exists
          const config = JSON.parse(swiperConfigElement.innerHTML.trim());
          new Swiper(swiperElement, config);
        } else {
          console.error("Swiper config element not found inside swiper element", swiperElement);
        }
      });
    });
  }

  faqToggle(): void {
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(faqItem => {
      faqItem.addEventListener('click', () => {
        (faqItem.parentNode as HTMLElement).classList.toggle('faq-active');
      });
    });
  }

  // skillsAnimation(): void {
  //   document.querySelectorAll('.skills-animation').forEach(item => {
  //     new Waypoint({
  //       element: item as HTMLElement,
  //       offset: '80%',
  //       handler: () => {
  //         item.querySelectorAll<HTMLElement>('.progress .progress-bar').forEach(el => {
  //           el.style.width = el.getAttribute('aria-valuenow') + '%';
  //         });
  //       }
  //     });
  //   });
  // }

  initIsotopeLayout(): void {
    window.addEventListener('load', () => {
      document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
        const layout = (isotopeItem.getAttribute('data-layout') || 'masonry') as Isotope.LayoutModes;
        const filter = isotopeItem.getAttribute('data-default-filter') || '*';
        const sort = isotopeItem.getAttribute('data-sort') || 'original-order';

        let initIsotope: any;
        imagesLoaded(isotopeItem.querySelector('.isotope-container') as HTMLElement, () => {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container') as HTMLElement, {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterElement => {
          filterElement.addEventListener('click', () => {
            isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
            (filterElement as HTMLElement).classList.add('filter-active');
            initIsotope.arrange({
              filter: filterElement.getAttribute('data-filter')
            });
            this.aosInit();
          });
        });
      });
    });
  }

  correctScrollPositionOnLoad(): void {
    window.addEventListener('load', () => {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash) as HTMLElement;
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  }

  navmenuScrollspy(): void {
    window.addEventListener('load', this.updateScrollSpy.bind(this));
    document.addEventListener('scroll', this.updateScrollSpy.bind(this));
  }

  updateScrollSpy(): void {
    const navmenulinks = document.querySelectorAll<HTMLAnchorElement>('.navmenu a');
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash) as HTMLElement;
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
}
