import { Component, OnInit } from '@angular/core';
import { PetService} from "../pet.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	private pet:any;

  constructor(private ps:PetService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  	this.pet = {
		name:"",
		type:"",
		desc:"",
		skill1:"",
		skill2:"",
		skill3:"",
		likes:0
  	};
  }

  create(){
		this.ps.create(this.pet,(data)=>{
			this.pet = data;
		});
		this.router.navigate([""]);
	}

}
