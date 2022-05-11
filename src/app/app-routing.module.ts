import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  { path: 'user', component: UserFormComponent },
  { path: 'user-list', component:UserListComponent },
  { path:'update-user/:id',component:UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
