import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { RouterPath } from 'src/app/routes.enum';

interface IUserData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  public userEmail = '';

  public userPassword = '';

  public userData?: IUserData;

  constructor(
    private readonly router: Router,
    private readonly searchService: SearchServiceService
  ) {}

  profileForm = new FormGroup({
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      [this.validate]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control.value === 'aaa@a.ru') {
      return of({ emailInUse: true });
    }
    return of(null);
  }

  formSubmit() {
    this.searchService.userEmailSubj.next(this.userEmail);
    this.userData = {
      email: this.userEmail,
      password: this.userPassword,
    };
    this.router.navigate([RouterPath.Main]);
  }
}
