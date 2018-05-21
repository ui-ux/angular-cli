import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUsers} from "./users";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private _url:string = '/assets/data/users.json';

  constructor(private http:HttpClient) { }

  getUsers():Observable<IUsers[]> {
      return this.http.get<IUsers[]>(this._url);
  }

}
