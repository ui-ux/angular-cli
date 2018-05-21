import { Component, OnInit } from '@angular/core';
import {NameService} from "../../name.service";

@Component({
  selector: 'app-d-component',
  templateUrl: './d-component.component.html',
  styleUrls: ['./d-component.component.scss']
})
export class DComponentComponent implements OnInit {
  public dservise = [];

  constructor(private _nameService: NameService) { }

  ngOnInit() {
    this._nameService.getUsers()
    .subscribe(data =>this.dservise=data);
  }

}
