const express = require ("express")
const app = express()
const FriendModel= require("./models/Friendly");
const TournModel= require("./models/Tournament");
const MatchModel= require("./models/Match");
const mongoose = require("mongoose")
const cors = require("cors")

mongoose.connect("mongodb+srv://adarsh:adarsh@cluster0.jbwde.mongodb.net/cricket?retryWrites=true&w=majority");

app.use(express.json());
app.use(cors());


app.post("/createMtype", async(req,res)=>{
  const data = req.body;
  const newData = new MtypeModel(data);

  await newData.save();
  console.log(res.json(data));

});

app.get("/getMtype", (req, res) => {
  MtypeModel.find({}, (err, result) => {
    if (err) {
       res.json(err);
    } else {
       res.json(result);
    }
  });
});

  app.post("/createFriend", async(req,res)=>{
    const data = req.body;
    const newData = new FriendModel(data);

    await newData.save();
    console.log(res.json(data));

  });

  app.get("/getFriend", (req, res) => {
    FriendModel.find({}, (err, result) => {
      if (err) {
         res.json(err);
      } else {
         res.json(result);
      }
    });
  });




  app.post("/createTournament", async(req,res)=>{
    const data = req.body;
    const newData = new TournModel(data);

    await newData.save();
    console.log(res.json(data));

  });

  app.get("/getTournament", (req, res) => {
    TournModel.find({}, (err, result) => {
      if (err) {
         res.json(err);
      } else {
         res.json(result);
      }
    });
  });
  app.post("/createMatch", async(req,res)=>{
    const data = req.body;
    const newData = new MatchModel(data);

    await newData.save();
    console.log(res.json(data));

  });

  app.get("/getMatch", (req, res) => {
    MatchModel.find({}, (err, result) => {
      if (err) {
         res.json(err);
      } else {
         res.json(result);
      }
    });
  });

app.listen(3001,()=>{
    console.log("server Runs perfectly");
});