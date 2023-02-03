import {Component, OnInit} from '@angular/core';
import {PersonalInfoService} from "../personal-info.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-pi-list-page',
  templateUrl: './pi-list-page.component.html',
  styleUrls: ['./pi-list-page.component.css']
})
export class PiListPageComponent implements OnInit {

  private FILE_ENDPOINT = 'http://localhost:1339/api/v1/all-images?image_path=';

  data: any;
  _isSpinning = true;

  limit: number = 10;
  skip: number = 10;
  // total: number;

  isLoading: boolean = false;

  constructor(
    private personalInfoService: PersonalInfoService,
    private _notification: NzNotificationService,
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
    this.personalInfoService.delete(id).subscribe(result => {
      this._notification.create('warning', 'Delete', 'Personal Info has been removed successfully');
      this.getPageData();
    });
  }

  skillsFormat(skills: string) {
    const arr = JSON.parse(skills)
    return arr.map((obj: any) => obj.label).join(', ')

  }

  resumeLink(link: string) {
    return typeof link !== null ? `${this.FILE_ENDPOINT + link}` : '/'

  }

}
