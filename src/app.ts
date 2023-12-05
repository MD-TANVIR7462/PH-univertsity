import express from 'express'
const app = express()
import cors from "cors"
import { studentRoutes } from './modules/students/StudentRoutes'
import { userRouter } from './modules/users/user.route'
import { notFound } from './middlewares/notFound'

//parsers
 app.use(cors())
 app.use(express.json())
 app.use(express.text())


app.use('/api/students', studentRoutes)
app.use('/api/users', userRouter)

//not found route 
app.use(notFound)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app