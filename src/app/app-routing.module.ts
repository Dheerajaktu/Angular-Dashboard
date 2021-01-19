import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { LocationComponent } from './Components/location/location.component';
import { FormsComponent } from './Components/forms/forms.component';
import { CardComponent } from './Components/card/card.component';
import { PaypalComponent } from './Components/paypal/paypal.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { MakePaymentComponent } from './Components/make-payment/make-payment.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forms/forget-password/forget-password.component';
import { TableComponent } from './Components/table/table.component';
import { ApiComponent } from './Components/api/api.component';
import { AlbumComponent } from './Components/album/album.component';
import { NotificationComponent } from './Components/notification/notification.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'location', component: LocationComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'card', component: CardComponent },
  { path: 'paypal', component: PaypalComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'makePayment', component: MakePaymentComponent },
  { path: 'ForgetPassword', component: ForgetPasswordComponent },
  { path: 'table', component: TableComponent },
  { path: 'api', component: ApiComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'notification', component: NotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
