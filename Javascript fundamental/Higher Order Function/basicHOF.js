//we use this example in Expressjs controller
const asyncHandler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        console.log(error)
        
    }
}