import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {


  user: { name: string; password: string; } | undefined;

constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.user={
      name: this.route.snapshot.params['name'],
      password:this.route.snapshot.params['password']
    }
    this.route.params.
    subscribe(
        (params:Params)=>{
          if(this.user){
          this.user.name=params['name'];
          this.user.password=params['password']
        }
      }
    )
  }
//group project
}
