import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { PetService} from "../pet.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
	private check:any;
	private pet_id:any;
	private pet:any;
	private count:any;

  constructor(private ps:PetService,private router:Router,private route:ActivatedRoute) { this.route.params.subscribe(params => this.pet_id = params)}

  ngOnInit() {
  	
  	this.check = true;
  	this.count = 0;
  	this.ps.find(this.pet_id,(data)=>{
  		this.pet = data;
  	})
  }

  delete(){
  	console.log(this.pet)
  	this.ps.destory(this.pet,(data)=>{
  		console.log('You are the new proud owner of '+ this.pet.name)
  	});

  	this.router.navigate([""]);
  }

  likes(){

  	this.ps.likes(this.pet,(data)=>{
  		console.log('Added one more like to '+this.pet.name)
  	});
  	this.check = false;
  	this.count = 1;
  }

}
