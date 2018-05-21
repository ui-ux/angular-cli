import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


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
  public username = "";
  public displayName = false;
  public color ='green';
  public colors =["green", "blue", "tomato"];
  public colors2 =[{id: 1, name: "name1"}, {id: 2, name: "name2"}];
  public lower = "LoWer";
  public aperr = "aPeR fsdfdsf ds fsdf ";
  public arr =[{id: 1, name: "jone"}, {id: 2, name: "mari"},{id: 3, name: "rydi"}];
  public date = new Date;

   //@Input() public parentData;
   @Input('parentData') public  parent;
   @Input() public message;
   @Output() public childEvent = new EventEmitter();


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
  onParent (){
    this.parent = "parentData click++++++";
  }

  fireEvent() {
    this.childEvent.emit('childEvent')
  }
}
