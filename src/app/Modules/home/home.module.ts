import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SharedComponentsModule } from 'src/app/Shared/shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { PostDetailsComponent } from './post-details/post-details.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
@NgModule({
  declarations: [HomePageComponent, HomeLayoutComponent, PostDetailsComponent, RecentActivitiesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
    FormsModule,
    NgApexchartsModule,
  ],
})
export class HomeModule {}
