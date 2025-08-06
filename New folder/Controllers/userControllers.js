import allUsers from "../models/AuthModels.js"

const getAllUsers = async (req , res) => {
    const datas = await allUsers.find({userType : "user"})
    res.status(201).json({
        message : "get all users",
        data : datas
    })
}

const delUser = async (req , res) => {
    res.status(201).json({
        message : "delete user"
    })
}

const updateUser = async (req , res) => {
    res.status(201).json({
        message : "updated user"
    })
}

export {
    getAllUsers,
    delUser,
    updateUser
}