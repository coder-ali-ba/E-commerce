import allUsers from "../models/AuthModels.js"

const getAllUsers = async (req , res) => {
    const datas = await allUsers.find({userType : "user"})
    res.status(201).json({
        message : "get all users",
        data : datas
    })
}

const delUser = async (req , res) => {
    const userId = req.params.id
    const userToUpdate = await allUsers.findOne({_id : userId})

    const updateUserStatus = await allUsers.findByIdAndUpdate(
      userId,
      { isDeleted: !userToUpdate.isDeleted },
      { new: true } // returns updated document
    );
    
    res.status(201).json({
        message : "delete user",
        data : updateUserStatus
    })
}
 

const updateUser = async (req , res) => {
    const userId = req.params.id
    const userToUpdate = await allUsers.findOne({_id : userId})
    const updatedUser = await allUsers.findByIdAndUpdate(userId , {isVarified : !userToUpdate.isVarified},{new :true })
    res.status(201).json({
        message : "updated user",
        data : updatedUser
    })
}

export {
    getAllUsers,
    delUser,
    updateUser
}