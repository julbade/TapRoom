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
  new Tap('KillerVodka', 'Proper 12', 5, 40, 'Strawberry'),
  new Tap('DrinkAndFight', 'Chans', 1, 80, 'Alcohol')
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
  this.newTap = new Tap("this.newTap.title", this.newTap.brand, this.newTap.price, this.newTap.content, this.newTap.flavor);
  this.taps.push(this.newTap);
}

doneAdding(newTap){
  this.newTap = null;
}

sellTap(currentTap){
  currentTap.pint--;
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

}
