import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.scss']
})
export class AComponentComponent implements OnInit {

  public name ="myName";
  public siteUsl = window.location.href;
  public testId = "testId";
  public isDisabled = true;
  public blueClass= "blue";
  public blueStyle= "blue";
  public messageClass = {
    "blue" : this.isDisabled,
    "font-24" : this.isDisabled,
    "italic" : this.isDisabled,
  };
  public titleStyle = {
    color: 'red',
    fontSize: '36px'
  };
  public isClick="";


  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "'return '+ this.name; " + this.name;
  }
  onClick(event) {
    console.log('console log');
    this.isClick ="text";
    this.isDisabled = false;
    console.log(event);
    this.name = event.type;

  }

  logMessage(value){
    console.log(value);
}

}
