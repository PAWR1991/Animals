import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class PetService {

  constructor(private http:HttpClient) { }

   all(cb){
  	this.http.get("/api/pets")
  	.subscribe(data=>cb(data));
  }

  find(pet, cb){
  	this.http.get("/api/pets/"+pet.id)
  	.subscribe(data=>cb(data));
  }

  create(pet,cb){
  	this.http.post("/api/pets",pet)
  	.subscribe(data=>cb(data));
  }

  destory(pet,cb){
  	this.http.delete("/api/pets/"+pet._id)
  	.subscribe(data=>cb(data));
  }
  
  update(pet,cb){
  	this.http.put("/api/pets/"+pet._id, pet)
  	.subscribe(data=>cb(data));
  }

  likes(pet,cb){
  	this.http.put("/api/likes/"+pet._id, pet)
  	.subscribe(data=>cb(data));
  }

}
