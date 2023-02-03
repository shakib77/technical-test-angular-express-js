import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {PersonalInfoService} from "../personal-info.service";
import {en_US, NzI18nService} from 'ng-zorro-antd/i18n';
import {Router} from "@angular/router";


@Component({
  selector: 'app-pi-create',
  templateUrl: './pi-create.component.html',
  styleUrls: ['./pi-create.component.css']
})
export class PiCreateComponent implements OnInit {

  validateForm: FormGroup;
  isSubmit: boolean = false;

  countries: any[] = [];
  cities: any[] = [];
  city: any;

  skills: any[] = [
    {id: 1, label: 'C#'},
    {id: 2, label: 'C++'},
    {id: 3, label: 'Java'},
    {id: 4, label: 'PHP'},
    {id: 5, label: 'SQL'}
  ]


  constructor(
    private _notification: NzNotificationService,
    private fb: FormBuilder,
    private personalInfoService: PersonalInfoService,
    private i18n: NzI18nService,
    private router: Router,
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      skills: this.fb.array([], [Validators.required, Validators.minLength(1)]),
      dob: ['', [Validators.required]],
      resume: [null, []],
      // resume1: checkArray.push(this.fb.control('', [Validators.required, Validators.minLength(1)]));
    });

  }

  ngOnInit() {
    this.i18n.setLocale(en_US);

    this.personalInfoService.getAllCountry().subscribe((result: any) => {
      this.countries = result.data;

    });
  }

  submitForm = ($event: any, value: { name: string; country: string | Blob; city: string | Blob; skills: any[]; dob: string | Blob; resume: string | Blob; }) => {
    console.log('value->', value);
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }

    const formData: FormData = new FormData();

    const skills = value.skills && value.skills.length > 0 ? JSON.stringify(value.skills) : ''

    formData.append('name', value.name);
    formData.append('country', value.country);
    formData.append('city', value.city);
    formData.append('skills', skills);
    formData.append('dob', value.dob);
    formData.append('resume', value.resume);

    this.personalInfoService.create(formData).subscribe({
      next: (result) => {
        if (result) {
          this.isSubmit = false;
          this._notification.create(
            'success',
            'New Concept has been successfully created.',
            result.name
          );
          this.router.navigate(['/details/', result.id]).then(r => r);
        }
      },
      error: (e) => {
        this.isSubmit = false;
        this._notification.create(
          'error',
          'Error Occurred!',
          "Concept didn't created!"
        );
      }
      // complete: () => console.info('complete')
    })


  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

  // Event method for setting up form in validation
  getFormControl(name: string | number) {
    return this.validateForm.controls[name];
  }

  onCountryChange($event: string) {
    const countyId = Number(encodeURI($event));
    this.cities = [];
    this.city = 0;
    if (!!countyId) {
      this.personalInfoService
        .getAllCity(countyId)
        .subscribe((result: any) => {
          this.cities = result.data;
        });
    } else {
      this.cities = [];
    }
  }

  cityChange($event: string) {
    const query = encodeURI($event);
    /*if (query !== 'null') {
      this.categoryProductService
        .getSubcategoryByCategoryId(query)
        .subscribe(result => {
          this.subcategorySearchOptions = result;
        });
    } else {
      this.subcategorySearchOptions = {};
    }*/
  }

  onCheckboxChange(e: any, value: any) {
    // console.log('e=>', e?.target?.value);
    console.log('es=>', value);
    const checkArray: FormArray = this.validateForm.get('skills') as FormArray;
    if (!!value) {
      // checkArray.push(this.fb.control('', [Validators.required, Validators.minLength(1)]));
      checkArray.push(new FormControl(value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value.id == value.id) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
