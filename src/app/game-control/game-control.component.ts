import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() stopCounter = new EventEmitter<boolean>();
  stop : boolean = false;
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.stop = false;
      this.stopCounter.emit(this.stop);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
    this.stop = true;
    this.stopCounter.emit(this.stop);
  }

}
