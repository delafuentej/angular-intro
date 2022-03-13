import { Component, OnInit } from '@angular/core';
// import service:
import { TeamService } from '../team.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  team:any[]=[];
  constructor(private _service:TeamService) {
    this.team = _service.gettingTeam();
   }

  ngOnInit(): void {
  }

}
