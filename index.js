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

    //const {fullName, email, password, age, address, state} = req.body;
    const user_details = {
        fullName: "Omoge Oluwadare",
        email: "dareomoge@gmail.com",
        password: "123456789",
        age: 25,
        address: "Asadam road, Ilorin",
        state: "Kwara",
    }
    res.send(user_details);    
})

app.post("/register", (req, res, next) => {

    //const fullName = req.body.fullName
    //const email = req.body.email
    //const password = req.body.password
    const {fullName, email, password} = req.body;

    const body = {
        fullName: fullName,
        email: email,
        password: password
    }
    console.log(body);

    res.send({
        //responseType: req.body,
        body,
        msg: "Resgistration Successfull"
    });
})

app.put("/update", (req, res, next) => {
    
    const age = req.body.age
    const address = req.body.address
    const state = req.body.state

    const user_details = {
        fullName: "Omoge Oluwadare",
        email: "dareomoge@gmail.com",
        password: "123456789",
        age: age,
        address: address,
        state: state,
    }
    console.log(user_details);

    res.send({
        user_details,
        msg: "Details updated"
    })
})

app.patch("/patch", (req, res, next) => {
    const {fullName, email, password, age, address, state} = req.body;

    const user_details = {
        fullName: "Omoge Oluwadare",
        email: "dareomoge@gmail.com",
        password: password,
        age: 25,
        address: "Asadam road, Ilorin",
        state: "Kwara",
        
    }
    console.log(user_details);

    res.send({
        user_details,
        msg: "details changed"
    })
})

app.delete("/delete", (req, res, next) => {
    const {fullName, email, password, age, address, state} = req.body;

    const user_details = {
        fullName: fullName,
        email: "dareomoge@gmail.com",
        password: "123456789",
        age: 25,
        address: "Asadam road, Ilorin",
        state: "Kwara",
    }
    console.log(user_details)

    res.send("user_details deleted")
})


const dev = (par1, par2) => {
    console.log({sum:par1+par2});
    console.log("Omoge Oluwadare Samuel");
}

dev(2, 3)