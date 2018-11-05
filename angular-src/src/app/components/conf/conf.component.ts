import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.css']
})
export class ConfComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.snslogin().subscribe(data => {
      this.authService.storeUserData(data.token, data.user);
      this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
      this.router.navigate(['dashboard']);
    })
  }

}
