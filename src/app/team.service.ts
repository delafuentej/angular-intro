import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'  
})
export class TeamService {
  team:any[]=[
    {
      name:'Jan Müller',
      specialty:'ReactJS',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
    }
    ,
    {
      name:'Lisa Schmidt',
      specialty:'CSS/UI',
      description:'Vel saepe reprehenderit tempora.'

    }
    ,
    {
      name:'Jana Schuhmacher',
      specialty:'PHP/ MySQL',
      description:'Est exercitationem nesciunt recusandae vel nostrum doloribus tempore, corporis in obcaecati ea'

    }
  

  ]

  constructor() { 
    console.log('service running')
  }
  gettingTeam(){
    return this.team;
  }
  gettingMember(i:any){
    return this.team[i];
  }
}
