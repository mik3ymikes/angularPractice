import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  }

}
