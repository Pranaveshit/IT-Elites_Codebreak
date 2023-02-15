const express=require('express');   
const router=express.Router();
const numTable=require("../models/number");
const console = require('console'); 
router.get("/",(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            function onClick(){
                alert("cliecked");
            }
        </script>
    </head>
    <body>
        <image src="./al-logo.svg" style="float:left;"></image>
        <center><span style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-size: 50px;">SPARE PARTS MANAGMENT</span></center>
        <br>
        <br><br><br><br>
        <center>
        <form action="/number" mehod="post">
        <select name="cars" id="cars">
            <option value="undefined" selected="true" disabled="true">Select Type Of vechiel</option>
            <option value="BADA DOST">Ashok Leyland BADA DOST</option>
            <option value="Dost+">Ashok Leyland Dost+</option>
            <option value="Ecomet 1615 H">Ashok Leyland Ecomet 1615 H</option>
            <option value="2820 Tipper">Ashok Leyland 2820 Tipper</option>
            <option value="Dost Strong">Ashok Leyland Dost Strong</option>
            <option value="Partner 6 Tyre">Ashok Leyland Partner 6 Tyre</option>
            <option value="1920 4x2">Ashok Leyland 1920 4x2</option>
            <option value="Partner 4 Tyre">Ashok Leyland Partner 4 Tyre</option>
            <option value="2620 6X2 LA">Ashok Leyland 2620 6X2 LA</option>
        </select>
        <input type="text" value="id" placeholder="enter your vechicle number"/>
        <select>
            <option value="undefined" selected="true" disabled="true">Select spare part required</option>
            <option value="Tyre">Tyre</option>
            <option value="Oil">Oil</option>
        </select>
        <button onclick="onClick()" type="submit">Click me</button>
        </form>
        </center>
    </body>
    </html>`)
})
router.post("/number",(req,res)=>{
    let{number}=req.id;
    if(number==""||id==undefined){
        res.json({
            status:"FAILED",
            message:"enter lorry number"
        })
    }
    else{
        numTable.find({number:number})
        .then((result)=>{
            if(result.length<0){
                res.json({
                    status:"FAILED",
                    message:"invalid id"
                })
            }
            else{
                res.json({
                    status:"SUCCESS",
                    message: result[0].chipId
                })
            }
        })
        .catch((err)=>{
            console.log(err);
            res.json({
                status:"FAILED",
                message:"unable to fetch id"
            })
        })
    }
})
router.post("/enterId",(req,res)=>{
    let{number,systemId}=req.body;
    let temp=new numTable({
        number:number,
        chipId:systemId,
        condition:"GOOD"
    })
    temp.save()
    .then((result)=>{
        res.json({
            status:"SAVED",
            message:"saved"
        })
    })
    .catch((err)=>{
        console.log(err),
        res.json({
            status:"FAILED",
            message:"Unable to to save"
        })
    })
})
module.exports=router;  