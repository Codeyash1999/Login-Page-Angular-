import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {

//Declaring A Variable CurrentIndex Which We Will Set To Zero
currentIndex = 0;
@Input() indicators = true;

// Starting Or Initializing The Variables
imageSrc = '';
imageAlt = '';
heading = '';
description = '';

selectImage(index : number) : void
{
  this.currentIndex = index;
}
// Making An Array Of Images In Which All The Images Will Be Entered As An Object
images = [
  //Object Number 1 For 1st Image.
  {
  imageSrc : "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80",
  imageAlt : 'TechImage1',
  heading : 'New opportunities for cooperation',
  description : "Collaboration opens doors to new horizons, offering fresh insights, unlocking innovation, and fostering growth for businesses and communities alike"
  },
  //Object Number 2 For 2nd Image.
  {
  imageSrc : "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  imageAlt : 'TechImage2',
  heading : "Contact Us Whenever You Want",
  description : "Don't hesitate to contact us at any time. We're here to help and look forward to hearing from you soon."
  },
  //Object Number 3 For 3rd Image.
  {
  imageSrc : "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
  imageAlt : 'TechImage3',
  heading : 'We Are The Best Organization',
  description : 'Our excellence in service, commitment to quality, and customer satisfaction set us apart as the best organization in our field.'
  },
];

}

//Using Unsplash For Images