let mongoose = require("mongoose");
let PetController = require('../controllers/PetController.js');
let path = require("path");

module.exports = function(app){
	app.get("/api/pets",PetController.all);
	app.get("/api/pets/:id",PetController.find);
	app.post("/api/pets",PetController.create);
	app.put("/api/pets/:id",PetController.update);
	app.delete("/api/pets/:id",PetController.destroy);

	app.put("/api/likes/:id",PetController.likes);


	app.all("*",(req,res)=>{
		res.sendFile(path.resolve("./client/dist/index.html"));
	});

}