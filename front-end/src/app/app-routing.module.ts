import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PiCreateComponent} from "./pi-create/pi-create.component";
import {PiListPageComponent} from "./pi-list-page/pi-list-page.component";

const routes: Routes = [
  {path: 'create', component: PiCreateComponent},
  {path: 'list', component: PiListPageComponent},
  {path: '', redirectTo: '/create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
