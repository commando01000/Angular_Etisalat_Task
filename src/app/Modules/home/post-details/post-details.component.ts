import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-ApexCharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-ApexCharts';
import { Albums } from 'src/app/interfaces/Albums';
import { UserService } from 'src/app/Services/user.service';

/**
 * Interface for Apex chart options
 */
export type ChartOptions = {
  /**
   * Series or data for the chart
   */
  series: ApexNonAxisChartSeries | any;
  /**
   * Chart options
   */
  chart: ApexChart | any;
  /**
   * Responsive options for the chart
   */
  responsive: ApexResponsive[] | any;
  /**
   * Labels for the chart
   */
  labels: any;
};
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent {
  /**
   * Chart component field
   */
  @ViewChild('chart') chart?: ChartComponent;
  /**
   * Chart options field
   */
  public chartOptions?: Partial<ChartOptions>;

  /**
   * Search Post field
   */
  searchPost: any = '';
  /**
   * Default post field
   */
  defaultPost: number = 1;
  /**
   * Posts list field
   */
  posts: Albums[] = [];
  /**
   * Post field
   */
  post: any = '';

  constructor(private UserService: UserService) {
    /**
     * Initialize the chart options
     */
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
  ngOnInit(): void {
    /**
     * Get the default album details
     */
    this.getDefaultAlbumDetails();
  }
  getDefaultAlbumDetails() {
    console.log(this.searchPost);
    /**
     * Get the album details of the default post
     */
    this.UserService.getAlbumDetails(this.defaultPost).subscribe({
      next: (response: any) => {
        /**
         * Assign the response to the posts list
         */
        this.posts = response[0];
        /**
         * Assign the second object of the response to the post field
         */
        this.post = response[1];
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
