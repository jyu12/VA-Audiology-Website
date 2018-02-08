import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tympanometry',
  styleUrls: ['./tympanometry.component.css'],
  template: `
  <div class="tympanometry">
    <div class="head" align="center">TYMPANOMETRY</div>
    <div class="subhead" align="left">TYPE</div>
    <div class="radio">
      <mat-radio-group>
        <mat-radio-button value="{{choiceOne}}">{{choiceOne}}</mat-radio-button> <br>
        <mat-radio-button value="{{choiceTwo}}">{{choiceTwo}}</mat-radio-button> <br>
        <mat-radio-button value="{{choiceThree}}">{{choiceThree}}</mat-radio-button> <br>
      </mat-radio-group>
    </div>
  </div>
  `
})
export class TympanometryComponent implements OnInit {

  /*
   * Data members for tympanometry radio buttons
   */
  public choiceOne: string = 'Choice 1';
  public choiceTwo: string = 'Choice 2';
  public choiceThree: string = 'Choice 3';
  constructor() { }

  public ngOnInit() {
  }

}
