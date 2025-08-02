const signUpController = (req , res) => {    
    const body = req.body
    res.json({
        data : body,
        message : "got signup api",        
    })
}

const logInController = (req , res) => {   
    res.json({
        message : "got login api",
    })
}


export {
    signUpController,
    logInController
}