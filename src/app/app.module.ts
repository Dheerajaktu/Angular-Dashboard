import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BarChartComponent } from './Components/Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './Components/Charts/line-chart/line-chart.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FormsComponent } from './Components/forms/forms.component';
import { CardComponent } from './Components/card/card.component';
import { LocationComponent } from './Components/location/location.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { MakePaymentComponent } from './Components/make-payment/make-payment.component';
import { PaypalComponent } from './Components/paypal/paypal.component';
import { PieChartComponent } from './Components/Charts/pie-chart/pie-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgetPasswordComponent } from './Components/forms/forget-password/forget-password.component';
import { MatDialog } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './Components/table/table.component';
import { MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { TitleService } from './Services/title.service';
import { CartService } from './Services/cart.service';
import { ApiComponent } from './Components/api/api.component';
import { HttpService } from './Services/http.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlbumComponent } from './Components/album/album.component';
import { AlbumService } from './Services/album.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './Components/Shared Components/pagination/pagination.component';
import { SearchHighlightPipe } from './Components/album/Pipes/search-highlight.pipe';
import { NotificationComponent } from './Components/notification/notification.component';
import {MatExpansionModule} from '@angular/material/expansion'







@NgModule({

  entryComponents: [
    ForgetPasswordComponent
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    ProfileComponent,
    FormsComponent,
    CardComponent,
    LocationComponent,
    ShoppingComponent,
    MakePaymentComponent,
    PaypalComponent,
    PieChartComponent,
    ForgetPasswordComponent,
    TableComponent,
    ApiComponent,
    AlbumComponent,
    PaginationComponent,
    SearchHighlightPipe,
    NotificationComponent

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    GoogleChartsModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatStepperModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    MatExpansionModule


  ],
  providers: [MatDialog, TitleService, CartService, HttpService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
