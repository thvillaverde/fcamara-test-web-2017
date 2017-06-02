import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [DataService]

})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { 
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])]
    });

    var token = localStorage.getItem('fc.token');
    if(token)
    {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
  }

  submit()
  {
    
    this.dataService.authenticate(this.form.value)
    .subscribe(result => {
      localStorage.setItem('fc.token', result.token);
      localStorage.setItem('fc.user', JSON.stringify(result.user));
      this.router.navigateByUrl('/home');
    }, error =>{
      alert('Login ou senha invalido');
    });
  }

}
