export default (frc)=> {
    return (req,res,next)=>{
      frc(req,res,next).catch((err)=>{
       
         console.log(err);
         res.status(err.status || 500).json({
            message: err.message || "Internal Server Error",
            status: err.status || 500
         });
      });
    }
}