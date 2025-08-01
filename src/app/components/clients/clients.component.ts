import { Component } from '@angular/core';
import SwiperCore from 'swiper';
import { Autoplay ,Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay,Pagination, Navigation]);

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {
  breakpoints = {
    480: { slidesPerView: 1,},
    780: { slidesPerView: 2,},
    1024: { slidesPerView: 5,}
  };
}
