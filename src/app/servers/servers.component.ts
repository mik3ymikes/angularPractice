import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  buttonClicks:any=[]
  count=0

//   serverStatus:string="offline"
//   serverOn:boolean=false
//   server:string=""


// username=''



// reset(){
//   this.username=''
// }

hide=true



display(){
this.hide=!this.hide
this.count++
this.buttonClicks.push(this.count)

}


getColor(){
 return this.count>5 ? 'white':'black'



}




}




