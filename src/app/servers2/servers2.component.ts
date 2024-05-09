import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-servers2',
  standalone: true,
  imports: [],
  templateUrl: './servers2.component.html',
  styleUrl: './servers2.component.css'
})
export class Servers2Component {

  @Output() clickz=new EventEmitter<void>()


clock():void{
  this.clickz.emit()
}

}
