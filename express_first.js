express=require('express');
app=express();
fs=require("fs");
mymodule=require("./my_cal_module");
body_parser=require('body-parser');

app.use(body_parser.urlencoded({extended:false}));


app.get("/",function(req,resp){
     resp.sendFile("login_form.html",{root:__dirname});
	 console.log('file reponse has been sent');
});
app.get("/about",function(req,resp){
     resp.send("<h1>about us</h1>");
});


app.post("/add",function(req,resp){
	resp.send('Addition : '+mymodule.calAdd(req.body.num_1,req.body.num_2));
});

app.listen(3120);