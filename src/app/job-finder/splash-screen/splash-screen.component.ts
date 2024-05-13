import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  progress: number = 0;
  intervalId: number;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = window.setInterval(this.incrementLoading.bind(this), 1000);
  }

  incrementLoading(){
    this.progress += 40
    if (this.progress >= 100) {
      window.clearInterval(this.intervalId);
    }
  }
}
