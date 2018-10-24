import { Component } from '@angular/core';
import { Tap } from './models/taproom.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tap Room';
  pint = 124;
  taps: Tap[] = [
  new Tap('KillerVodka', 'Proper 12', 15, 40, 'Strawberry'),
  new Tap('DrinkAndFight', 'Chans', 25, 80, 'Alcohol'),
  new Tap('AjFucker', 'AJ', 10, 90, 'Alcohol')
];

selectedTap = null;
newTap = null;

editTap(clickedTap) {
  this.selectedTap = clickedTap;
}
finishEdit() {
  this.selectedTap = null;

}
addTap() {
  let addTap = new Tap();
  this.newTap = addTap;
  this.taps.push(this.newTap);

}

doneAdding(){
  this.newTap = 0;
}

sellTap(currentTap){
  currentTap.pint--;
}
sellGrowler(currentTap){
  currentTap.pint-2;
}
sellBigGrowler(currentTap){
  currentTap.pint -5;
}
pintColor(currentTap){
    if (currentTap.pint <= 10){
      return "bg-danger";
    } else if (currentTap.pint <= 70 && currentTap.pint > 10) {
      return  "bg-warning";
    } else {
      return "bg-success";
    }
  }
  priceColor(currentTap){
      if (currentTap.price >= 20){
        return "bg-danger";
      } else if (currentTap.price < 20 && currentTap.price > 10) {
        return  "bg-warning";
      } else {
        return "bg-info";
      }
    }
  // alcoholContent(currentTap){
  //     if (currentTap.content >= 20){
  //       return Strong;
  //     } else if (currentTap.content < 20 && currentTap.content > 10) {
  //       return  Medium;
  //     } else {
  //       return WEAK;
  //     }
  //   }
}
