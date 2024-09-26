//importing
var express = require("express");
require("./connection")
const EmployeeModel = require("./model/employee");

//initiallize
var app = express();

//middleware
app.use(express.json());



//api creation
app.get('/trial', (req, res) => {
    res.send('trial message')
})

app.get('/', (req, res) => {
    res.send('It is an employee app')
})


//api add
app.post("/add", async (req, res) => {
    try {
        await EmployeeModel(req.body).save()
        res.send({ message: "Data send" })
    }
    catch (error) {
        console.log(error)
    }
})

//api view
app.get("/view", async (req, res) => {
    try {
        const data = await EmployeeModel.find()
        res.send(data)
    }
    catch (error) {
        console.log(error)
    }
})

//api delete
app.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id
        await EmployeeModel.findByIdAndDelete(id)
        res.send({ message: "Data deleted" })
    }
    catch (error) {
        console.log(error)
    }
})

//update api
app.put("/update/:id/:body", async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        await EmployeeModel.findByIdAndUpdate(id, body)
        res.send({ message: "Data updated" })
    }
    catch (error) {
        console.log(error)
    }
})


//port
app.listen(3025, () => {
    console.log("port is running");
})