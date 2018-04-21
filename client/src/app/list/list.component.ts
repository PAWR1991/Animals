import { Component, OnInit } from '@angular/core';
import { PetService} from "../pet.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	private pets:any;
	private pet_id:any;

  constructor(private ps:PetService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  	this.ps.all((data)=>{
  		this.pets=data;
  	})
  }

}
