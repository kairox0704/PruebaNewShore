import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../@core/service/house/house.service';
import { MembersService } from '../../@core/service/members/members.service';
import { Router } from '@angular/router';
import { house } from '../../@core/Models/house.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private membersService: MembersService,
              private router:Router) { }

  homes: String [] = [];
  payloadMembers = []
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.membersService.getAll().subscribe((res) => {
      res.forEach((element:any) => {
        if(element!=undefined){
          if(!this.homes.includes(element.house)){
            this.homes.push(element.house)
          }
        }
      });
    });
  }

  selectHome(home:String){
    this.router.navigate(['/house',home]);
  }

}