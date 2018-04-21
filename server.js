let express    = require("express");
let app        = express();
let bodyParser = require("body-parser");
let session = require("express-session");

app.use(session({secret: 'TonyIsth3B35t'}));
app.use(express.static( __dirname + '/client/dist' ));
app.use(bodyParser.json({ extended: true }));
app.use(express.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000,()=>{
	console.log("Server Running 8000");
});