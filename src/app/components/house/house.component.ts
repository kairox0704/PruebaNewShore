import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../@core/service/members/members.service'
import { HouseService } from '../../@core/service/house/house.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from '../../@core/Models/member.model' ;
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {
  members:Member [] = []
  soName = true;
  soLast = true;
  informacion:any;
  dataForB:Member[] = [];
  Result: Member[] = []

  constructor(private houseService:HouseService,
              private routeAc:ActivatedRoute,
              private membersService:MembersService,
              public form: FormBuilder,) {
                this.contactForm = this.createFormGroup();
               }

  ngOnInit(): void {
    this.getAll()
    // this.builder();
  }

  contactForm: FormGroup;

  createFormGroup(){
    return new FormGroup({
      Name:new FormControl('')
    })
  }
 
  getAll(){
    let cv= this.routeAc.snapshot.params;
    var URLH =cv.home;
    if(URLH == ""){
      this.membersService.getAll().subscribe((res:Member[]) => {
        res.forEach((element:any) => {
          if(element.house == "")
          this.members.push(element);
        });
        this.members.map((member: Member) => {
          let nameLastName = member.name.split(" ");
          member.name = nameLastName[0];
          member.lastName = nameLastName[1];
        })
      });
    }else{
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
  
  sortedByName(): void {
    if(this.soName){
      this.soName = false;
      this.members.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }); 
    }else{
      this.members.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }); 
      this.soName = true;
      this.members.reverse();
    }
  }

  sortedByLast(): void {
    if(this.soLast){
      this.soLast = false;
      this.members.sort((a, b) => {
        if (a.lastName > b.lastName) {
          return 1;
        }
        if (a.lastName < b.lastName) {
          return -1;
        }
        return 0;
      }); 
    }else{
      this.members.sort((a, b) => {
        if (a.lastName > b.lastName) {
          return 1;
        }
        if (a.lastName < b.lastName) {
          return -1;
        }
        return 0;
      }); 
      this.soLast = true;
      this.members.reverse();
    }
  }
  Busqueda(){
    this.Result = []
    console.log(this.dataForB)
    if(this.dataForB.length == 0){
      this.dataForB = this.members;
    }else{
      this.members = this.dataForB;
    }
    let data = this.contactForm.value;
    let search_term = data.Name.toLocaleLowerCase()
    this.members.forEach(element => {
      let name = element['name'].toLocaleLowerCase()
      console.log(search_term + " " + name)
      if(name.indexOf(search_term) >= 0){
        this.Result.push(element);
      }
    });
    this.members = this.Result;
  }  
}
