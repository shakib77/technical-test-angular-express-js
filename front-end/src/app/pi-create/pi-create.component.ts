import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-pi-create',
  templateUrl: './pi-create.component.html',
  styleUrls: ['./pi-create.component.css']
})
export class PiCreateComponent {
  validateForm: FormGroup;
  isSubmit: boolean = false;

  constructor(
    private _notification: NzNotificationService,
    private fb: FormBuilder,) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      skill: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      resume: [null, []],

    });
  }

  ngOnInit() {

  }

  submitForm = ($event: any, value: { concept: any; code: any; country: string | Blob; city: string | Blob; skill: string | Blob; dob: string | Blob; resume: string | Blob; }) => {
    console.log('value->', value);
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }

    const formData: FormData = new FormData();

    const name = `${value.concept} ${value.code}`

    formData.append('name', name);
    formData.append('country', value.country);
    formData.append('city', value.city);
    formData.append('skill', value.skill);
    formData.append('dob', value.dob);
    formData.append('resume', value.resume);
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
}
