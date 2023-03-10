import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  teamStatus = 'Join Scotts Team';
  teamName = "";
  joinTeam = false;


  onJoinTeam(){
    this.joinTeam = true;
    this.teamStatus= 'Welcome to Scott Hub!. Your team name is ' + this.teamName;
  }
  onUpdateTeamName(event:Event){
    this.teamName = (<HTMLInputElement>event.target).value;
  }
}
