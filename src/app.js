import cookieParser from 'cookie-parser';
import e from 'cors';
import express from 'express'

const app=express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({limit:'16kb',extended:true}))
app.use(express.static('public'))
app.use(cookieParser())
export default app;