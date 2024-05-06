import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  serverStatus:string="offline"
  serverOn:boolean=false
  server:string=""



getServerStatus(){
  setTimeout(() =>{
    this.serverStatus=this.serverStatus==="offline"?"online":"offline"
    this.serverOn=!this.serverOn
    return this.serverStatus
  }, 1000)

  }

  // onCreateServer(){
  //   this.server='server was created'

  // }


  onUpdateServerName(event:any){
 this.server=event.target.value
  }


  create(){
  // this.server="server was created"


  }

}



