import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {PersonalInfoService} from "../personal-info.service";

@Component({
  selector: 'app-pi-create',
  templateUrl: './pi-create.component.html',
  styleUrls: ['./pi-create.component.css']
})
export class PiCreateComponent implements OnInit {
  // validateForm: FormGroup;
  isSubmit: boolean = false;

  countries: any[] = [];
  cities: any[] = [];

  skills: any[] = [
    {label: 'Apple', value: 'Apple', checked: true},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange'}
  ]


  constructor(
    // private _notification: NzNotificationService,
    // private fb: FormBuilder,
    private personalInfoService: PersonalInfoService,
  ) {
    // this.validateForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   country: ['', [Validators.required]],
    //   city: ['', [Validators.required]],
    //   skills: this.fb.array([]),
    //   dob: ['', [Validators.required]],
    //   resume: [null, []],
    //   // checkArray: this.fb.array([])
    //
    // });

  }

  ngOnInit() {
    this.personalInfoService.getAllCountry().subscribe(result => {
      console.log('result->', result);
    });
  }

  // submitForm = ($event: any, value: { concept: any; code: any; country: string | Blob; city: string | Blob; skill: string | Blob; dob: string | Blob; resume: string | Blob; }) => {
  //   console.log('value->', value);
  //   $event.preventDefault();
  //   for (const key in this.validateForm.controls) {
  //     this.validateForm.controls[key].markAsDirty();
  //   }
  //
  //   const formData: FormData = new FormData();
  //
  //   const name = `${value.concept} ${value.code}`
  //
  //   formData.append('name', name);
  //   formData.append('country', value.country);
  //   formData.append('city', value.city);
  //   formData.append('skills', value.skill);
  //   formData.append('dob', value.dob);
  //   formData.append('resume', value.resume);
  // };

  // resetForm($event: MouseEvent) {
  //   $event.preventDefault();
  //   this.validateForm.reset();
  //   for (const key in this.validateForm.controls) {
  //     this.validateForm.controls[key].markAsPristine();
  //   }
  // }

  // Event method for setting up form in validation
  // getFormControl(name: string | number) {
  //   return this.validateForm.controls[name];
  // }

  // onCountryChange($event: string) {
  //   const query = encodeURI($event);
  //   /*if (query !== 'null') {
  //     this.categoryProductService
  //       .getSubcategoryByCategoryId(query)
  //       .subscribe(result => {
  //         this.categorySearchOptions = result;
  //       });
  //   } else {
  //     this.subcategorySearchOptions = {};
  //   }*/
  // }

  // cityChange($event: string) {
  //   const query = encodeURI($event);
  //   /*if (query !== 'null') {
  //     this.categoryProductService
  //       .getSubcategoryByCategoryId(query)
  //       .subscribe(result => {
  //         this.subcategorySearchOptions = result;
  //       });
  //   } else {
  //     this.subcategorySearchOptions = {};
  //   }*/
  // }

  // onCheckboxChange(e: any) {
  //   console.log('e=>', e?.target?.value);
  //   const checkArray: FormArray = this.validateForm.get('skills') as FormArray;
  //   if (e.target && e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: any) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

}
