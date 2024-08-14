const express = require('express');
const {connectMongoDb} = require('./connection');
const  { logReqRes } = require('./middlewares');
const userRouter = require('./routes/user');
const app = express();
const PORT =8000;
// const users = require('./MOCK_DATA.json');


//connection
connectMongoDb('mongodb://localhost:27017/YouTube_ProjectDB').then( ()=> console.log("MongoDB connected")); 

//- Middleware but you can assume as plugin 
app.use(express.urlencoded({ extended:false }));
app.use(logReqRes("log.txt"));
//Routes
app.use("/api/users",userRouter);


app.listen(PORT, () => console.log("server started at port 8000"));










// console.log("Hello from Middleware 1");
    // return res.json({"msg": "Hello from Middleware 1"});
    // next();
//Schema
// const userSchema =  new mongoose.Schema({
//     firstName:{
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     jobTitle: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     },
// },
//    { timestamps: true}
 
// );


// const User = mongoose.model('User', userSchema);
// app.use((req,res,next) => {
//     console.log("Hello from Middleware 2");
//     // return res.json({"msg": "Hello from Middleware 1"});
//     // return res.end("Hey");
//     next();
// });


//Routes
// app.get('/users',async (req, res) => {
//     const allDbUsers = await User.find({});
//      const html = 
//     `<ul>
//     ${allDbUsers.map((user) => `<li> ${user.firstName} - ${user.email} </li>`).join('')}
//     </ul>`;
//     res.send(html);
// });



// app.get('/api/users', async (req, res) => {
//     const allDbUsers = await User.find({});

//     // usres.setHeader('X-MyName', 'Dipsekhar');// this is a custom header
//     //always use X to custom header
//     return res.json(allDbUsers);
// });


// app
//  .route('/api/users/:id')
//  .get(async (req, res) => {
//     const user = await User.findById(req.params.id);
//     // const id = parseInt(req.params.id);
//     // const user = User.find((user) => user.id === id);
//     if (!user) return res.status(404).send("User not found");
//     return res.json(user);
// })
//  .patch(async (req, res) => {
//     await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
//     return res.json({status: "Success"});
// })
//  .delete(async(req, res) => {
//     await User.findByIdAndDelete(req.params.id);
//     return res.json({status:"success"});
// });


// // app.get("/api/users/:id", (req, res) => {
// //     const id = req.params.id;
// //     const user = User.find((user) => user.id === parseInt(id));
// //     return res.json(user);
// // });

// async function createUser(req, res) {
//     const body = req.body;
//     if (!body.first_name ||!body.last_name||!body.email||!body.gender||!body.job_title){
//          return res.status(400).send("All fields are required");}
//     try {
//         // Use await to wait for the User.create promise to resolve
//         const result = await User.create({
//             firstName: req.body.first_name,
//             lastName: req.body.last_name,
//             email: req.body.email,
//             jobTitle: req.body.job_title,
//             gender: req.body.gender,
//         });

//         // Log the result to the console
//         console.log("Result: " + result);

//         // Return the result in the response with a 201 status code
//         return res.status(201).json(result);
//     } catch (error) {
//         // Handle any errors that occur during the creation process
//         console.error("Error creating user:", error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// // Example usage of the function in an Express route
// app.post('/api/users', createUser);


// app.post("/api/users", (req, res) => {

//     const body = req.body;
//     if (!body.first_name ||!body.last_name||!body.email||!body.gender||!body.job_title){
//          return res.status(400).send("All fields are required");}
    
//     // Define an async function to handle the request






//     // const result = await User.create({
//     //     firstName: body.first_name,
//     //     lastName: body.last_name,
//     //     email: body.email,
//     //     jobTitle: body.job_title,
//     //     gender: body.gender,
//     // });
//     // console.log("Result: " + result);
//     // return res.status(201).json(result);





//     // users.push({...body,id:users.length+1});
//     // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data) =>{
//     //     return res.status(201).json({status: "pending"}); 
//     // });
//     // console.log("Body: " , body);


// });



