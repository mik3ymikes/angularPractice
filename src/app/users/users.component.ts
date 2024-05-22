import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

constructor(){}

ngOnInit(): void {

}


  users:any[]=[ {
    name:"april",
    password:"sfdds"

  },
  {
    name:"mike",
    password:"miere"
  },
  {
    name:"nick",
    password:"mnidsfdfafdfas"
  },
  {
    name:"josh",
    password:"zelda"
  }
]


}
