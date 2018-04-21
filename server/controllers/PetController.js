let mongoose = require('mongoose');
let Pet = mongoose.model('Pet');

class PetController{
	all(req,res){
		Pet.find({})
		.sort({"type":1})
		.exec((err, pet)=>{
			if(err){
				return res.status(403).json({errors:"Failed to retrieve the pet's database"});
			}
			else {
				return res.status(200).json(pet);
			}
		});
	}

	find(req,res){
		// console.log('In the find method')
		// console.log(req.params.id);
		Pet.findOne({_id:req.params.id})
		.exec((err,pet)=>{
			if(err){
				return res.json({errors:"Failed to find that specific pet"});
			}
			else {
				return res.status(200).json(pet);
			}
		});
	}

	create(req, res){
		let newPet = new Pet(req.body);
		Pet.findOne({name:req.body.name},(err,pet)=>{
			if(pet){
				return res.json({errors:"Pet's Name Already Exists in the Datebase"});
			}
			else {
				newPet.save((err)=>{
					if (err){
						return res.json(err);
					}
					else {
						return res.status(200).json(newPet);
					}
				});
			}
		});

	}

	update(req, res){
		Pet.findOne({_id:req.params.id},(err,pet)=>{
				if(err){
					return res.json({errors:"Failed to find that pet for upgrades"});
				}
				else {
					let check = false;
					
					// the || is doing a check if the req.body.param is empty then it will grab the data from the database so it won't easer the data in db
					if (pet.name != req.body.name){
						pet.name = req.body.name || pet.name;
						check = true;
					}
					
					pet.type = req.body.type || pet.type;
					pet.desc = req.body.desc || pet.desc;
					pet.skill1 = req.body.skill1;
					pet.skill2 = req.body.skill2;
					pet.skill3 = req.body.skill3;
					pet.likes = pet.likes;
					pet.updatedAt = new Date();


					if (check){

						Pet.findOne({name:req.body.name},(err,pet1)=>{
							if(pet1){
								return res.json({errors:"Pet's name can't be updated to an existing pet's name"});
							}
							else {
								pet.save((err)=>{
									if (err){
										return res.status(403).json(err);
									}
									else {
										return res.status(200).json(pet);
									}
								});
							}
						});
					}else {

						pet.save((err)=>{
							if (err){
								return res.status(403).json(err);
							}
							else {
								return res.status(200).json(pet);
							}
						});
						
					}
				}
			});
	}

	destroy(req,res){
		console.log(req.params.id);
		Pet.findOne({_id:req.params.id}, (err,pet)=>{
			if(err){
				return res.json({errors:"Failed to find this pet for adoption"});
			}else {
				Pet.remove({_id:req.params.id},(err)=>{
						if(err){
							return res.status(403).json({errors:"Failed to confirm the adoption"});
						}
						else {
							return res.status(200).json(pet);
						}
				});
			}
		});
	}

	likes(req,res){
		console.log(req.params.id);
		Pet.findOne({_id:req.params.id},(err,pet)=>{
				if(err){
					return res.status(403).json({errors:"Failed to find that pet for upgrades"});
				}
				else {
			
					// pet.name = pet.name;
					// pet.type = pet.type;
					// pet.desc = pet.desc;
					// pet.skill1 = pet.skill1;
					// pet.skill2 = pet.skill2;
					// pet.skill3 = pet.skill3;
					pet.likes += 1;
					pet.updatedAt = new Date();
				}

				pet.save((err)=>{
					if (err){
						return res.status(403).json(err);
					}
					else {
						return res.status(200).json(pet);
					}
				});

			});
	}


}

module.exports = new PetController();