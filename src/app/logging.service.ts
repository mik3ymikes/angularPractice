import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChage() {
    console.log('a server changedf')
  }
  //studying Observables round 2
  constructor() { }
}
