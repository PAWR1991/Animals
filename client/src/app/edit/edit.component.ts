import { Component, OnInit } from '@angular/core';
import { PetService} from "../pet.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	private pet:any;
	private pet_id:any;

  constructor(private ps:PetService,private router:Router,private route:ActivatedRoute) {this.route.params.subscribe(params => this.pet_id = params) }

  ngOnInit() {
  	this.ps.find(this.pet_id,(data)=>{
  		this.pet = data;
  	});
  }

  update(){
  	this.ps.update(this.pet, (data)=>{
  	
  		this.pet = data;

  		this.router.navigate(['details/'+this.pet._id])
  	})
  }



}
