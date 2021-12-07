import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  
  };
  constructor(private router:Router) { }

  ngOnInit() {
  }
  openPage(){
    this.router.navigate(['details']);
  }

}
