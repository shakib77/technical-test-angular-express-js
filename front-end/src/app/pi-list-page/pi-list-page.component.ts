import {Component, OnInit} from '@angular/core';
import {PersonalInfoService} from "../personal-info.service";

@Component({
  selector: 'app-pi-list-page',
  templateUrl: './pi-list-page.component.html',
  styleUrls: ['./pi-list-page.component.css']
})
export class PiListPageComponent implements OnInit {

  data: any;
  _isSpinning = true;

  limit: number = 10;
  skip: number = 10;
  // total: number;

  isLoading: boolean = false;

  constructor(
    private personalInfoService: PersonalInfoService
  ) {
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(event?: any) {
    // if (event) {
    //   this.page = event;
    // }
    this._isSpinning = true;
    this.isLoading = true;
    this.personalInfoService
      .getAllPersonalInfo(
        this.skip,
        this.limit,
      ).subscribe({
      next: (result) => {
        this.isLoading = false;

        this.data = result.data;

        this._isSpinning = false;
      },
      error: (e) => {
        this.isLoading = false;
        this._isSpinning = false;
      }
      // complete: () => console.info('complete')
    })
  }

  deleteConfirm(id: number) {
    /*this.conceptService.delete(id).subscribe(result => {
      this._notification.create('warning', 'Delete', 'Product concept has been removed successfully');
      this.getPageData();
    });*/

  }

}
