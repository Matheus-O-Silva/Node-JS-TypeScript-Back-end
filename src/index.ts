import dotenv from "dotenv"
import express, { response } from "express"
dotenv.config()

const PORT = process.env.PORT

const app = express()
app.get('/', (request, response) => {
  response.send('Server Up 2')
})

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
})
