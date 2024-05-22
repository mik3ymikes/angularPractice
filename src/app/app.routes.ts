import { Routes } from '@angular/router';
import { TestyComponent } from './testy/testy.component';
import { Servers3Component } from './servers3/servers3.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path: 'server', component:Servers3Component},
  {path: 'users', component:UsersComponent},
  // {path: 'users/:name/:password', component:UserComponent}
  {path: 'users/:name/:password', component:UsersComponent}
];
