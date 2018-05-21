import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public parent = 'parent - app-component';
  public message = "";
  onParent (){
    this.parent = "parentData click";
  }
}
