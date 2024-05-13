import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChage(status:string){
    console.log('a server changed')
  }

  constructor() { }
}
