import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Meta, DomSanitizer, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DragScrollComponent } from 'ngx-drag-scroll';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  reviews = []
  safeURL
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  constructor(private title: Title,public _sanitizer:DomSanitizer,public http: HttpClient, private meta: Meta) { 
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    this.meta.updateTag({ name: 'description', content: 'We provide the best email marketing tools for small businesses. We have tools to help you analyze your target audience and keep escalating up your business.' })
    this.meta.updateTag({ name: 'title', content: 'Best Email Marketing Tools for Small Business – Mailpod' });
    this.title.setTitle('Best Email Marketing Tools for Small Business – Mailpod');
  }

  ngOnInit() {

  
//   $('.open-menu').click(function(){
//       $('.navbar').toggleClass('open');
//     });
  
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
  
    
//   // Testimonial carousel (uses the Owl Carousel library)
//   (<any>$(".testimonial-carousel")).owlCarousel({
//     autoplay: true,
//     dots: true,
//     loop: true,
//   nav:true,  
//   margin:30,  
//     animateOut: 'fadeOut',    
//   responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
//   });  
// $( ".owl-prev").html('<i class="fa fa-long-arrow-left"></i>');
//  $( ".owl-next").html('<i class="fa fa-long-arrow-right"></i>');

//   $(window).scroll(function(){
//     if ($(window).scrollTop() >= 132) {
//         $('.head-menu-logo').addClass('scroll-header');
//     }
//     else {
//         $('.head-menu-logo').removeClass('scroll-header');
//     }
// });

  }
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

  ngOnDestroy() {
    this.meta.updateTag({ name: 'viewport', content: 'width=1636' });
    this.meta.updateTag({ name: 'description', content: 'The Best Email marketing tool for all type of business. It provides simple and easy build-up for any type of email. Click to know more about Mailpod.' })
    this.meta.updateTag({ name: 'title', content: 'Best Email marketing tool for Small and Medium business' });
    this.title.setTitle('Best Email marketing tool for Small and Medium business');
  }   

}
