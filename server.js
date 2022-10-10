const express = require("express");
const app = express();
const helmet=require("helmet");
app.use(helmet())


require("dotenv").config();
var PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors({
  "origin":"*",
  "methods":["GET","POST"]
}));
const session = require('express-session')
app.use(session({
  secret:"some secret",
  cookie:{maxAge:30000},
  saveUninitialized:false
}))
const mongoose = require("mongoose");
const { contactRoutes } = require("./routes/contactRoutes");
const { authUser } = require("./routes/user/authUserIn");
const { helpRoutes } = require("./routes/Actions/helpRoutes");
const { courseRoutes } = require("./routes/Actions/courseRoutes");
const { jobRoutes } = require("./routes/Actions/jobsRoutes");
const { disputesRoute } = require("./routes/Actions/disputesRoutes");
app.use(express.urlencoded({ extended: true,limit:"100mb" }));
app.use(express.json({limit:"100mb"}));

var URI = process.env.URI;

mongoose.connect(URI, (err, res) => {
  if (err) {
    console.log("cant connect to mongoose///");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/hey", (req, res) => {
  // console.log("good")
  res.send(["good"]);
});

app.use("/contact", contactRoutes);

app.use("/authUserIn", authUser);

app.use("/help",helpRoutes);

app.use("/courses",courseRoutes);

app.use("/job",jobRoutes)

app.use("/dispute",disputesRoute)

app.post("/log",(req,res)=>{
  // console.log(req.sessionID)
   const {name,pws}=req.body;
   if (name&&pws) {
      if (req.session.authenticated) {
        res.json(req.session)
      }else{
        if (pws==123) {
          req.session.authenticated=true;
          req.session.user={
            name,pws
          };
          // res.json(req.session)
        }else{
          // res.status(403).json({msg:"bad crediendtials"})
        }
      }
   }else{
    // res.status(403).json({msg:"bad credientails"})
   }
  res.send(200)
})

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found on the server</h1>");
  next();
});

app.listen(PORT, (req, res) => {
  console.log("connected...", PORT);
});


