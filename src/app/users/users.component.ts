import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, UserComponent],
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
