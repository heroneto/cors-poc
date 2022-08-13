const express = require("express")
const cors = require("cors")


const app = express()
app.use(cors("*"))

// const allowedOrigins = ['https://emersonbroga.com', 'https://js.emersonbroga.com']

app.get("/", (req, res) => {
  // res.set("Access-Control-Allow-Origin", "https://emersonbroga.com")
  /* 
  // => DOES NOT WORK
    allowedOrigins.forEach(origin => {
    res.set("Access-Control-Allow-Origin", origin)
  })*/
  res.send("Hello World")
})

app.listen(3000)