import { Component } from '@angular/core';
import { Albums } from 'src/app/interfaces/Albums';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css'],
})
export class RecentActivitiesComponent {
  constructor(private UserService: UserService) {}
  albums: Albums[] = [];
  ngOnInit(): void {
    this.getDefaultAlbumDetails();
  }
  getDefaultAlbumDetails() {
    /**
     * Get the albums of our default user (1)
     */
    this.UserService.getAlbums(1).subscribe({
      next: (response: any) => {
        /**
         * Assign the first 4 items from the response to the albums list
         */
        this.albums = response.slice(0, 4);
        console.log(this.albums);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
  deleteAlbum(id: any) {
    this.UserService.deleteAlbum(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.albums = this.albums.filter((album) => album.id !== id);
        console.log('Deleted Successfully !');
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
