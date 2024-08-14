const User = require("../models/user");


async function handleGetAllUsers(req, res, next) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res, next) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    return res.json(user);  
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
    return res.json({status: "Success"});
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
}

async function handleCreateUser(req, res) {
    const body = req.body;
    if (!body.first_name ||!body.last_name||!body.email||!body.gender||!body.job_title){
         return res.status(400).send("All fields are required");}
    try {
        // Use await to wait for the User.create promise to resolve
        const result = await User.create({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email,
            jobTitle: req.body.job_title,
            gender: req.body.gender,
        });

        // Log the result to the console
        console.log("Result: " + result);

        // Return the result in the response with a 201 status code
        return res.status(201).json(result);
    } catch (error) {
        // Handle any errors that occur during the creation process
        console.error("Error creating user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports ={
    handleGetAllUsers: handleGetAllUsers,
    handleGetUserById: handleGetUserById,
    handleUpdateUserById: handleUpdateUserById,
    handleDeleteUserById: handleDeleteUserById,
    handleCreateUser: handleCreateUser,
 };