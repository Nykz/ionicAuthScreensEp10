import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthScreenPage } from './auth-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AuthScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthScreenPageRoutingModule {}
