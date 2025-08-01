import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Isotope from 'isotope-layout';

const iso = new Isotope('.grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

import imagesLoaded from 'imagesloaded';

imagesLoaded('.grid', function() {
  console.log('Images loaded');
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  AOS.init();