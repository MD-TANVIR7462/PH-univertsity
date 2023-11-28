import express from 'express'
const app = express()
import cors from "cors"
import { studentRoutes } from './modules/students/StudentRoutes'

//parsers
 app.use(cors())
 app.use(express.json())
 app.use(express.text())


app.use('/api/students', studentRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app