import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GetUriComponent } from './get-uri/get-uri.component';

const routes: Routes = [
  { path: 'api', component: GetUriComponent },
  { path: '', component: GetUriComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
