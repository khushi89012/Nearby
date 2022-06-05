const express = require('express');
const Neighbourhood = require("../models/neighbourhood");
const Resturant = require("../models/resturant.model");
const router = express.Router();

router.get('/', (req, res) => {
  return  res.send('Hello World');
}
);

router.get("/neighbour",async(res,req)=>{
    try{
        const data = await Neighbourhood.find();
       res.send(data);
    }catch(err){
       res.send(err);
    }
})

router.get("/resturant",async(res,req)=>{
    try{
        const data = await Resturant.find();
      return  res.send(data);
    }catch(err){
      return  res.send(err);
    }
}
)



router.post("/resturant",async(res,req)=>{
    try{
        const data = await Resturant.create(req.body);
        res.staus(201).send(data);
    }catch(err){
   res.status(500).send(err);
    }
}
)


router.post("/neighbour",async(res,req)=>{
    try{
        const data = await Neighbourhood.create(req.body);
       res.send(data);
    }catch(err){
        res.send(err);
    }
}
)

module.exports = router;