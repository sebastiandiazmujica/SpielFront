import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Storage} from '@ionic/storage'


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOps= {
    initialSlide: 0, 
    slidesPerView:1,
    centeredSlides: true,
    speed: 400
  };

  slides = [
  {
    imageSrc : "../../assets/img/intro-image1.jpg",
    subTitle: "Regístrate",
    description: "Regístrate para iniciar tu mejor experiencia de juego",
    icon:"null"
  },
  {
    imageSrc : "../../assets/img/intro-image2.jpg",
    subTitle: "Encuentra",
    description: "Encuentra tu compañero de juego",
    icon:"null"
  },
  {
    imageSrc : "../../assets/img/intro-image3.jpg",
    subTitle: "Organiza",
    description: "Organiza tus partidos",
    icon:"null"
  },
  ]


  constructor(private router: Router, private storage: Storage) {  }

  finish(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
