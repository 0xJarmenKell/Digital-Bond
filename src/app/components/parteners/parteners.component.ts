import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-parteners',
  templateUrl: './parteners.component.html',
  styleUrl: './parteners.component.css'
})
export class PartenersComponent {
  breakpoints = {
    640: { slidesPerView: 1,},
    768: { slidesPerView: 2,},
    1024: { slidesPerView: 3,}
  };

  config: SwiperOptions = {
    loop: true,
  };
}
