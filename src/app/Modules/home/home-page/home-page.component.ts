import { Users } from 'src/app/interfaces/Users';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { Albums } from 'src/app/interfaces/Albums';

/**
 * Home page component
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  /**
   * User name field
   */
  userName: string = '';
  /**
   * Users list field
   */
  users: Users[] = [];
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
  /**
   * Default search key field
   */
  defaultSearchKey: string = 'JobID';
  /**
   * Constructor
   * @param UserService
   */
  constructor(private UserService: UserService) {}

  /**
   * Method called after the view is initialized
   */
  ngAfterViewInit() {
    /**
     * Get the user name of the user with id 1
     */
    this.getUserName(1);
  }
  /**
   * Method called when the component is initialized
   */
  ngOnInit(): void {
    /**
     * Get the default album details
     */
    this.getDefaultAlbumDetails();
  }
  /**
   * Method to get the user name of a user
   * @param userID
   */
  getUserName(userID: number) {
    /**
     * Get the user details of the user with the given id
     */
    this.UserService.getUserDetails(userID).subscribe({
      next: (response: any) => {
        console.log(response);
        /**
         * Assign the response to the users list
         */
        this.users = response;
        /**
         * Assign the name of the 4th user to the user name field
         */
        this.userName = this.users[3].name;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  /**
   * Method to get the default album details
   */
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

  /**
   * Method to get the album details of a post
   */
  getPostDetails() {
    /**
     * Get the album details of the given post
     */
    this.UserService.getAlbumDetails(this.searchPost).subscribe({
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

  /**
   * Method to change the search key
   */
  changeDropdownStatus() {
    if (this.defaultSearchKey == 'JobID') {
      this.defaultSearchKey = 'AlbumID';
    } else {
      this.defaultSearchKey = 'JobID';
    }
  }
}
