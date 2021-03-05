import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../@core/service/house/house.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from '../../@core/Models/member.model' ;

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {

  constructor(private houseService:HouseService,
              private routeAc:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll()
  }
  members:Member [] = []
  getAll(){
    let cv= this.routeAc.snapshot.params;
    var URLH =cv.home;
    console.log(this.routeAc.snapshot.params.home)
    this.houseService.getMembersPerHouse(URLH).subscribe((res:Member[]) => {
      this.members = res
      this.members.map((member: Member) => {
        let nameLastName = member.name.split(" ");
        member.name = nameLastName[0];
        member.lastName = nameLastName[1];
      })
    });
    
  }
}
