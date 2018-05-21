import { Component, OnInit } from '@angular/core';
import {NameService} from "../../name.service";

@Component({
  selector: 'app-e-component',
  templateUrl: './e-component.component.html',
  styleUrls: ['./e-component.component.scss']
})
export class EComponentComponent implements OnInit {
  public dservise = [];

  constructor(private _nameService: NameService) { }

  ngOnInit() {
    this._nameService.getUsers()
      .subscribe(data =>this.dservise=data);
  }
}
