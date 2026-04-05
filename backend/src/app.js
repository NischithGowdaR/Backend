import express from "express";

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
//routes 

import userRoutes from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRoutes);

//example route http://localhost:4000/api/v1/users/register


export default app;   