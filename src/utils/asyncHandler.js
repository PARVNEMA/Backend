const asynchHandler=(reqhandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqhandler(req,res,next)).catch((err)=> next(err))
    }
}