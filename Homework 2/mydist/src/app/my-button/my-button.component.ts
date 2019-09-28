import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  service: MyServiceService;
  like: boolean;
  info: string;

  constructor(service: MyServiceService) {
    this.service = service;
   }

  ngOnInit() {
  }
  imageLiked () {
    this.like = !this.like; 
    this.info = this.service.likeImage(this.like);

  }
}
