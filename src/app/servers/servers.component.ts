import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  serverStatus:string="offline"
  serverOn:boolean=false


getServerStatus(){
  setTimeout(() =>{
    this.serverStatus=this.serverStatus==="offline"?"online":"offline"
    this.serverOn=!this.serverOn
    return this.serverStatus
  }, 1000)

  }
}



