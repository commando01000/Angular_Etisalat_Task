import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'sign-in',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'authentication/sign-in',
  //   component: SignInComponent,
  // },
  // {
  //   path: 'authentication/sign-up',
  //   component: SignUpComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedComponentsRoutingModule { }
