import express, { NextFunction, Request, Response } from 'express'
const app = express()
import cors from "cors"
import { studentRoutes } from './modules/students/StudentRoutes'
import { userRouter } from './modules/users/user.route'
import { notFound } from './middlewares/notFound'
import { SemestrRoutes } from './modules/Semester/semesterRoutes'

//parsers
 app.use(cors())
 app.use(express.json())
 app.use(express.text())


app.use('/api/students', studentRoutes)
app.use('/api/users', userRouter)
app.use('/api/semester',SemestrRoutes)

//not found route 
app.use(notFound)

app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  const message = err.message || "something went wrong"
  res.status(500).json({
    success:false,
    message,
    errror:err
  })

})

export default app