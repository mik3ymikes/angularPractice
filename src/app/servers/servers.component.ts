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



getServerStatus(){
  setTimeout(() =>{
    this.serverStatus=this.serverStatus==="offline"?"online":"offline"
    return this.serverStatus

  }, 2000)

  }
}



