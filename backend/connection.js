var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://blazedthrutime:myMONGODB.1234@cluster0.f3mfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err)
    } );