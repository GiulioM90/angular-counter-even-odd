import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  sumOdd : number;
  sumEven : number;
  stop:boolean;

  onStoppedCounter(checkStop: boolean){
    if(checkStop){
      this.stop=true;
      let sumOdd = this.oddNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      });
      let sumEven = this.evenNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      });
      this.sumOdd= sumOdd;
      this.sumEven = sumEven;

      console.log(`Stopped counter, sum of odd number is ${sumOdd}, and the sum of even number is ${sumEven}, the state of stop is: ${this.stop}`);
    } else {
      this.stop = false;
      console.log(`state of stop: ${this.stop}`);
    }
  }
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
