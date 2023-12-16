require('./db/config')
const cors=require('cors');
const User=require('./db/User');
const Product=require('./db/Product')
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(cors())

app.post('/register',async(req,res)=>{
    let user =new User(req.body)
    let result=await user.save();
    result=result.toObject()
    delete result.password
    res.send(result)
});

app.post('/Addproduct',async(req,res)=>{
    let productAdd =new Product (req.body)
    let result=await productAdd.save();
    res.send(result);
});
app.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password)
    {
        let user=await User.findOne(req.body).select("-password")
        if(user)
        res.send(user)
    else
    res.send("user not found")

    }
    else
    res.send("user not found")

});

app.get("/products",async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
    resp.send(products)
    }else{
    resp.send({result:"No Products found"})
    }
});
app.delete("/products/:id", async(req, resp)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result)

});

app.get ('/products/:id',async(req,res)=>{
    let result=await Product.findOne({_id:req.params.id});
    console.log(result)
    if(result)
    res.send(result)
    else
    res.send({result:"user not found"})
})

app.put("/product/:id" , async (req,resp)=>{
    let result = await Product.updateOne( {_id: req.params.id},
        {
            $set : req.body

        }
        )
        resp.send(result)

});

app.get("/search/:key", async (req,resp)=>{
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key}},
            { comapny: {$regex: req.params.key}},
            { category: { $regex: req.params.key}},
            {price:{$regex: req.params.key}}
        ]
    });
    resp.send(result)
})

app.listen(4500);