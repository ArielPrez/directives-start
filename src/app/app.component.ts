import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-start';
  // numbers = [1, 2, 3, 4, 5];
  oddNum = [1, 3, 5];
  evenNum = [2, 4];
  onlyOdd = true;
  typeNum = 'Even';
  valueForASwitch = 1;
  changeWord(){
    this.onlyOdd = !this.onlyOdd;
    if(!this.onlyOdd){
      this.typeNum = 'Odd';
    }else{
      this.typeNum = 'Even';
    }
  }
}
