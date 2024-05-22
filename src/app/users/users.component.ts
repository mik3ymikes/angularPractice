import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, UserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [
    { name: "april", password: "sfdds" },
    { name: "mike", password: "miere" },
    { name: "nick", password: "mnidsfdfafdfas" },
    { name: "josh", password: "zelda" }
  ];



  constructor() {}

  ngOnInit(): void {}


}
