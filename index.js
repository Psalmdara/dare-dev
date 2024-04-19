const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Listening on server port:" + port);
})

app.use(express.urlencoded({extended:true}))
app.use(express.json({}))

app.get("/students", (req, res, next) => {
    const studentsDetails = {
        name: "Omoge Dare",
        age: 25,
        class: 2020,
        address: "ilorin Kwara"
    }
    res.send(studentsDetails);    
})

app.post("/register", (req, res, next) => {

    const fullName = req.body.fullName
    const email = req.body.email
    const password = req.body.password
    //const {userName, email, password} = req.body;

    const body = {
        fullName: "Psalmdara",
        email: "dareomoge@gmail.com",
        password: 123456789
    }

    res.send({
        responseType: req.body,
        //body,
        msg: "Resgistration Successfull"
    });
})

app.put("/update", (req, res, next) => {
   
    const fullName = req.body.fullName
    const email = req.body.email
    const password = req.body.password
    const state = req.body.state

    const body = {
        fullName: "Psalmdara",
        email: "dare@gmail.com",
        password: 123456789,
        state: "Kwara"
    }

    res.send({
        body,
        msg: "Details updated"
    })
})

app.patch("/patch", (req, res, next) => {
    const {fullName, email, password, state} = req.body;

    const body = {
        fullName: "Omoge Dare",
        email: "dareomoge@gmail.com",
        paswword: 123456789,
        state: "kwara"
    }

    res.send({
        body,
        msg: "details changed"
    })
})

app.delete("/delete", (req, res, next) => {
    const {fullName, email, password, state} = req.body;

    const body = {
        fullName: "Omoge Dare",
        email: "dareomoge@gmail.com",
        paswword: 123456789,
        state: "kwara"
    }

    res.send({
        msg: "details deleted"
    })
})


const dev = (par1, par2) => {
    console.log({sum:par1+par2});
    console.log("Omoge Oluwadare Samuel");
}

dev(2, 3)