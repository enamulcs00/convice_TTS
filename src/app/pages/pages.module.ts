import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PagesRoutes } from './pages.routing';
import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { BikesComponent } from './bikes/bikes.component';
import { ToursComponent } from './tours/tours.component';
import { DestinationComponent } from './destination/destination.component';
import { HotelsComponent } from './hotels/hotels.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { RevenueManagementComponent } from './revenue-management/revenue-management.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CmsComponent } from './pages/cms/cms.component';
import { AboutComponent } from './about/about.component';
import { QuillModule } from 'ngx-quill';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NotificationComponent } from './notification/notification.component';
import { VendorsComponent } from './vendors/vendors.component';
import { EventsComponent } from './events/events.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VendordetailComponent } from './vendordetail/vendordetail.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { ChefprofiledetailComponent } from './chefprofiledetail/chefprofiledetail.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { BannerComponent } from './banner/banner.component';
import { PrivacyComponent } from './privacy-policy/privacy.component';
import { AdminComponent } from './admin/admin.component';
import { SupportComponent } from './support/support.component';
import {MatIconModule} from '@angular/material/icon';
import { TransactionsComponent } from './transactions/transactions.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    NgbModule,
    QuillModule.forRoot(),
    ChartsModule,
    ChartistModule,
    NgxChartsModule,
    NgxDatatableModule,
    MatPaginatorModule,
    MatIconModule,
    NgxPaginationModule
  
  ],
  declarations: [
    HelperclassesComponent,
   
    InvoiceComponent,
    ProfileComponent,   
    UsersComponent,
    BikesComponent,
    ToursComponent,
    DestinationComponent,
    HotelsComponent,
    CalculatorComponent,
    RevenueManagementComponent,
    ReviewsComponent,
    AnalyticsComponent,
    CmsComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    NotificationComponent,
    VendorsComponent,
    EventsComponent,
    RewardsComponent,
    VendordetailComponent,
    UserhistoryComponent,
    UsersDetailComponent,
    PromocodeComponent,
    ChefprofiledetailComponent,
    FoodCategoriesComponent,
    InventoryComponent,
    OrderlistComponent,
    BannerComponent,
    PrivacyComponent,
    AdminComponent,
    SupportComponent,
    TransactionsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ] 
})
export class PagesModule {}
