const express = require('express');

//rest object
const app = express();


//routes
app.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to BLood Bank App",
    });
})

//port
const PORT = 8080;

//liation
app.listen(PORT, () => {
    console.log("node server running")
})
