import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createPromoRangeValidator } from './validators/data-range.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'angular-mat-datepicker-range';

  dateRangeForm = this.formBuilder.group({
    fromDate: ['', Validators.required],
    toDate: ['', Validators.required]
  }, {
    validators: [createPromoRangeValidator()],
    updateOn: 'blur'  // validates it after user finished with interaction
  }
  
  );

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    
  }

  onFormSubmit() {
    console.log('Is Form Invalid', this.dateRangeForm.invalid);
  }
}