import { Routes } from '@angular/router';

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
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './notification/notification.component';
import { VendorsComponent } from './vendors/vendors.component';
import { EventsComponent } from './events/events.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VendordetailComponent } from './vendordetail/vendordetail.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { ChefprofiledetailComponent } from './chefprofiledetail/chefprofiledetail.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { BannerComponent } from './banner/banner.component';
import { PrivacyComponent } from './privacy-policy/privacy.component';
import { AdminComponent } from './admin/admin.component';
import { SupportComponent } from './support/support.component';
import { TransactionsComponent } from './transactions/transactions.component';
// import { UsersDetailComponent } from './users-detail/users-detail.component';


export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'helperclasses',
        component: HelperclassesComponent,
        data: {
          title: 'Helper Classes',
          urls: [
            { title: '', url: '/dashboard' },
            { title: 'Helper Classes' }
          ]
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Manage Users',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users' }
          ]
        }
      },
      {
        path: 'users_detail',
        component: UsersDetailComponent,
        data: {
          title: 'Users Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users Detail' }
          ]
        }
      },
      {
        path: 'usershistory',
        component: UserhistoryComponent,
        data: {
          title: 'User History',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'User History' }
          ]
        }
      },
      {
        path: 'packages',
        component: VendorsComponent,
        data: {
          title: 'Manage  Packages',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Packages' }
          ]
        }
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        data: {
          title: 'Manage transactions',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Transactions' }
          ]
        }
      },
      {
        path: 'vendorsdetail',
        component: VendordetailComponent,
        data: {
          title: 'Vendors Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors Detail' }
          ]
        }
      },
      {
        path: 'foodcategories',
        component: FoodCategoriesComponent,
        data: {
          title: 'Food Categories',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Food Categories' }
          ]
        }
      },
      {
        path: 'events',
        component: EventsComponent,
        data: {
          title: 'Events',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Events' }
          ]
        }
      },
      {
        path: 'rewards',
        component: RewardsComponent,
        data: {
          title: 'Rewards',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Rewards' }
          ]
        }
      },
      {
        path: 'promocode',
        component: PromocodeComponent,
        data: {
          title: 'Promo Code',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Promo Code' }
          ]
        }
      },
      {
        path: 'Inventory',
        component: InventoryComponent,
        data: {
          title: 'Inventory',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Inventory' }
          ]
        }
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Invoice',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Invoice Page' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Profile Page' }
          ]
        }
      },
      {
        path: 'chef_profile',
        component: ChefprofiledetailComponent,
        data: {
          title: 'Chef Profile',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Chef Profile' }
          ]
        }
      },
      {
        path: 'orderlist',
        component: OrderlistComponent,
        data: {
          title: 'Pricing',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Pricing Page' }
          ]
        }
      },
      {
        path: 'banner',
        component: BannerComponent,
        data: {
          title: 'Banner',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Banner ' }
          ]
        }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: {
          title: 'Pricing',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Pricing Page' }
          ]
        }
      },

      // {
      //   path: 'usersdetail',
      //   component: UsersDetailComponent,
      //   data: {
      //     title: 'Users Detail',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Users' }
      //     ]
      //   }
      // },
      {
        path: 'tours',
        component: ToursComponent,
        data: {
          title: 'Tours',
          urls: [
            { title: 'Dashboard', },
            { title: 'Tours' }
          ]
        }
      },
      {
        path: 'bikes',
        component: BikesComponent,
        data: {
          title: 'Bikes',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Bikes' }
          ]
        }
      },
      {
        path: 'destination',
        component: DestinationComponent,
        data: {
          title: 'Destination',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Destination' }
          ]
        }
      },
      {
        path: 'hotels',
        component: HotelsComponent,
        data: {
          title: 'Hotels',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Hotels' }
          ]
        }
      },
      {
        path: 'calculator',
        component: CalculatorComponent,
        data: {
          title: 'Calculator',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Caculator' }
          ]
        }
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: {
          title: 'Reviews',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Revies' }
          ]
        }
      },
      {
        path: 'revenue',
        component: RevenueManagementComponent,
        data: {
          title: 'Revenue',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Revenue' }
          ]
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Analytics' }
          ]
        }
      },
      {
        path: 'manage_admin',
        component: AdminComponent,
        data: {
          title: 'Admin',
          urls: [
            { title: 'Dashboard', url: '/manage_admin' },
            { title: 'Profile' }
          ]
        }
      },

      {
        path: 'notification',
        component: NotificationComponent,
        data: {
          title: 'Notification',
          urls: [
            { title: 'Dashboard', url: '/notification' },
            { title: 'Notification' }
          ]
        }
      },
      {
        path: 'terms',
        component: AboutComponent,
        data: {
          title: 'Terms And Conditions',
          urls: [
            { title: 'CMS', url: '/terms' },
            { title: 'Terms And Conditions' }
          ]
        }
      },
      {
        path: 'support',
        component: SupportComponent,
        data: {
          title: 'Support',
          urls: [
            { title: 'CMS', url: '/support' },
            { title: 'Support' }
          ]
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact Us',
          urls: [
            { title: 'CMS', url: '/contact' },
            { title: 'Contact Us' }
          ]
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'FAQ',
          urls: [
            { title: 'CMS', url: '/faq' },
            { title: 'FAQ' }
          ]
        }
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
        data: {
          title: 'Privacy Policy',
          urls: [
            { title: 'CMS', url: '/privacy' },
            { title: 'Privacy Policy' }
          ]
        }
      },
    ]
  }
];
