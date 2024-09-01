//import { sample_products } from "./data";

const express = require('express');
//import cors from "cors"

const app = express();
//app.use(cors({
//    credentials:true,
//    origin:["http://localhost:4200"]
//}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB server');
    } catch (err) {
        console.error('Error connecting to MongoDB server', err);
        process.exit(1);
    }
}
/*
app.get("/products/all",async function (req ,res) {
    try{
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HandyBin');
        const collection=db.collection('Products');		
        const result = await collection.find({},{productId:1,_id:0,productName:1,productDesc:1, price:1, category:1}).toArray();
		var data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    }
    catch(err){
        console.error('Error : ',err);
    }
})

app.get("products/:reqProduct", async function (req,res) {
    try{
        res.setHeader('content-type','application/json')
        res.setHeader("Access-Control-Allow-Origin","*");
        const searchTerm = req.params.reqProduct;
        const db = client.db('farm');
        const collection=db.collection('products');		
        const result = await collection.find({},{productId:1,_id:0,productName:1,productDesc:1, price:1, category:1}).toArray();
        res.send(typeof(result));
        const reqResult = result.filter(product => product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log(reqResult);
        res.send(reqResult);
    }
    catch(err)
    {
        console.error('Error : ',err);
    }
})



app.post("/users/login",async (req , res) => {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
    const {email,password} = req.body;
    const db = client.db('farm');
    const collection=db.collection('users');
    const user_data = await collection.find({},{userName:1,_id:0,email:1,password:1, phoneNumber:1}).toArray();
    const user = user_data.find(user=>user.email === email && user.password === password);


    if(user)
    {
        res.send(user);
    }
    else{
        res.status(400).send("USER NOT FOUND");
    }
})
*/

app.get("/register", async function (req, res) {
    try {
      res.setHeader("content-type", "application/json");
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins for development
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      const db = client.db('farm');
      const collection=db.collection('users');
      const result = await collection.insertOne(req.query);
      //var result = await users.insertOne(doc);
      console.log("Inserted Successfully");
      var data = { status: true, message: req.require };
      res.json(data);
    } catch (err) {
      console.error("Error ", err);
      data = { status: false, message: "Insert Failed" };
      res.json(data);
    }
  });


  app.get("/addproduct", async function (req, res) {
    try {
      res.setHeader("content-type", "application/json");
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins for development
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      const db = client.db('farm');
      const collection=db.collection('product');
      const result = await collection.insertOne(req.query);
      //var result = await users.insertOne(doc);
      console.log("Inserted Successfully");
      var data = { status: true, message: req.require };
      res.json(data);
    } catch (err) {
      console.error("Error ", err);
      data = { status: false, message: "Insert Failed" };
      res.json(data);
    }
  });

  app.get('/findAll', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('product');		
        const result = await collection.find({},{name:1,_id:0,price:1,description:1,category:1,offer:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });

  app.get('/get_product_details/:productname', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('product');		
        const result = await collection.findOne({name:productname},{name:1,_id:0,price:1,description:1,category:1,offer:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });


  app.get('/findcategseed', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('product');		
        const result = await collection.find({},{name:1,_id:0,price:1,description:1,category:1,offer:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });

  app.get('/findcategfert', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('product');		
        const result = await collection.find({category:'Fertilizer'},{name:1,_id:0,price:1,description:1,category:1,offer:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });

  app.get('/pd', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('product');		
        const result = await collection.find({},{name:1,_id:0,price:1,description:1,category:1,offer:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });

  app.get('/pd/:prodname', async function (req, res) {
    try {
        const productname = req.params.prodname;
        console.log(productname);
        res.setHeader('content-type', 'application/json');
        res.setHeader("Access-Control-Allow-Origin", "*");
        const db = client.db('farm');
        const collection = db.collection('product');
        const result = await collection.findOne({ name: prodname});
        if (result) {
            res.json(result); // Send the fetched document as JSON response
        } else {
            res.status(404).json({ status: false, message: "Product not found" });
        }
    } catch (err) {
        console.error('Error in game display ', err);
        res.status(500).json({ status: false, message: "Failed to fetch" });
    }
  });


  app.get('/productupdate', async function (req, res){
    try {
      console.log("try")
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('product');
        console.log("entered")
        const result = await collection.updateOne({ name: req.query.name }, { $set: { name: req.query.name ,price:req.query.price,category:req.query.category,description:req.query.description,offer:req.query.offer,stock:req.query.stock } });
        data={ status:true,message: "Updated Successfully" };
    res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Updated Failed" };
    res.json(data);
    }
  });

  app.get('/deleteproduct', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('product');		
        const result = await collection.deleteOne({name:req.query.name})
    data={ status:true,message: "Deletion SuccessFull" };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "NO data Found"};
    res.json(data);
    }
  });
  
  


  

  app.get('/userlogin', async function (req, res){
    try {
      res.setHeader('content-type','application/json')
      res.setHeader("Access-Control-Allow-Origin","*");
      var doc = {
        email:req.query.email,
        password: req.query.password,
        
      };
      const db = client.db('farm');
      const collection=db.collection('users');
      const result = await collection.findOne(doc);
      const collection1=db.collection('admin');
      const result1 = await collection1.findOne(doc);
      if(result!=null)
      {
          data={ status:true,message: "Successfully find the docs",list:result };
      }
      else
      {
        data={ status:false,message: "Failed find the docs"};
      }
      res.json(data);
    } 
    catch (err) {
      console.error('Error', err);
      data={ status:false,message: "Failed find the docs"};
      res.json(data);
    }
   });
  
   app.get('/adminlogin', async function (req, res){
    try {
      res.setHeader('content-type','application/json')
      res.setHeader("Access-Control-Allow-Origin","*");
      var doc = {
        email:req.query.email,
        password: req.query.password,
      };
      const db = client.db('farm');
      const collection=db.collection('admin');
      const result = await collection.findOne(doc);
      if(result!=null)
      {
          data={ status:true,message: "Successfully find the docs",list:result };
      }
      else
      {
        data={ status:false,message: "Failed find the docs"};
      }
      res.json(data);
    } 
    catch (err) {
      console.error('Error', err);
      data={ status:false,message: "Failed find the docs"};
      res.json(data);
    }
   });



   app.get('/dispfert', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('orders');
        const result = await collection.find({},{name:1,_id:0,price:1,category:1,email:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });

  app.get('/dispseeds', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('farm');
        const collection=db.collection('orders');		
        const result = await collection.find({},{name:1,_id:0,price:1,category:1,email:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });

  
  


app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
	connect(); // Connect to MongoDB when the server starts
});