import { Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers2',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './servers2.component.html',
  styleUrl: './servers2.component.css'
})
export class Servers2Component {

  // newName: string = ''; // Initialize newName
  newAge: number = 0; // Initialize newAge
  @ViewChild('newName') newName: any
  formData: { name: string, age: number }[] = [];

  // finish() {
  //   // Push name and age into formData array
  //   this.formData.push({
  //     name: this.newName,
  //     age: this.newAge
  //   });
  // }

  finish(newName:any, newAge:any) {

    alert(this.newName.nativeElement.value)
  }












}
