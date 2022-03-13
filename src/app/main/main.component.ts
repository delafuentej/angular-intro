import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  show:boolean=false;
  active:any;
  courses:string[]=["React", "Angular", "Vue.js"];
  pets:Array<any> =[
    {
      type:'dog',
      name:'Scooby Doo',
      age:5
  }
  ,
  {
    type:'cat',
    name:'Garfield',
    age:3
},
{
  type:'hamster',
  name:'Willy',
  age:2
}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
