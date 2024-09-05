import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import SwiperCore from 'swiper';
import { Autoplay ,Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay,Pagination, Navigation]);

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string; 
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{

  testimonials: Testimonial[] = [];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    
  };

  constructor() { }

  ngOnInit(): void {
    // Fetch the testimonials dynamically from an API or service
    this.loadTestimonials();
  }


  loadTestimonials(): void {
    // This data can come from a service or API
    this.testimonials = [
      {
        name: 'Saul Goodman',
        role: 'This company was a game-changer for our business. Excellent service!',
        text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        image: 'assets/img/testimonials/testimonials-1.jpg'
      },
      {
        name: 'Jane Smith',
        role: 'Fantastic work. Highly recommend their services!',
        text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        image: 'assets/img/testimonials/testimonials-2.jpg'
      },
      {
        name: 'Michael Lee',
        role: 'Great experience. Will definitely work with them again.',
        text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        image: 'assets/img/testimonials/testimonials-3.jpg'
      },
      {
        name: 'Michael Lee',
        role: 'Great experience. Will definitely work with them again.',
        text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        image: 'assets/img/testimonials/testimonials-4.jpg'
      },
      {
        name: 'Michael Lee',
        role: 'Great experience. Will definitely work with them again.',
        text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        image: 'assets/img/testimonials/testimonials-5.jpg'
      }
    ];
  }

}
