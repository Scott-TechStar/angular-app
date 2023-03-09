import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  teamStatus = 'Join Scotts Team';
  onJoinTeam(){
    this.teamStatus= 'Welcome to Scotts Team';
  }
}
