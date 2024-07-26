const express = require("express")
const router = require("./image.js")

const app = express()
app.use(router)

app.listen(1200, () => console.log("Server is running on port 1200"))