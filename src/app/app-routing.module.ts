import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BlockitGuard } from './blockit.guard';
import { FirstComponent } from './first/first.component';
import { ForthComponent } from './forth/forth.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  { path: 'address', component: AddressComponent},
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThirdComponent},
  { path: 'forth', component: ForthComponent},
{
  path: '',
  redirectTo:'/second',
  pathMatch:'full'

},
  { path: 'customer',
  canActivate:[BlockitGuard],
  loadChildren: () => import('./customer/customer.module')
  .then(m => m.CustomerModule) },
{
  path:'**',
  component: FirstComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true
    }
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
