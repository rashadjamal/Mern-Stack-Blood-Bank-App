const express = require('express');

//rest object
const app = express();

app.use('/app/v1/test', require("./routes/testRoutes"))

//port
const PORT = 8080;

//liation
app.listen(PORT, () => {
    console.log("node server running")
})
