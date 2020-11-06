import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-a11y';
  public form: FormGroup = null;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      yesNoAnswer: [null],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
