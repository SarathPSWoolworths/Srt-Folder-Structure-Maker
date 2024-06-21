import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeActionService {

  constructor() { }

  
  public getUniqueId = () => {
    return (Math.floor(new Date().valueOf() * Math.random()));
  }
}
