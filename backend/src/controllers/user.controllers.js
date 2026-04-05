import { User } from '../models/user.models.js';

const registerUser = async (req, res) => {
    try {
        const { username , email, password } = req.body;


        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required !!!" });
        }

        //check if user already exists
        const existingUser = await User.findOne({email:email.toLowerCase()});
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists !!!" });
        }
        //create new user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false
        });

        
        res.status(201).json({
             message: "User Registered",
             user: {
                id: user._id,
                username: user.username,
                email: user.email
             }
        });


    } catch (error) {
        res.status(500).json({ message: "Internal server Error", error: error.message });
        
    }
};

export { 
    registerUser
 };