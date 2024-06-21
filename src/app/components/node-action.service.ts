import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeActionService {

  constructor() { }

  /**
   * to generate an unique id for the node
   * @returns number  
   */
  public getUniqueId = (): number => {
    return (Math.floor(new Date().valueOf() * Math.random()));
  }
}
