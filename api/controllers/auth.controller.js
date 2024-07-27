import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // HASH THE PASSWORD
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      console.log(hashedPassword);
  
      // CREATE A NEW USER AND SAVE TO DB
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      console.log(newUser);
  
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        if (error.code === 'P2002') {
            // P2002 is the error code for unique constraint violation in Prisma
            if (error.meta.target.includes('username')) {
              return res.status(500).json({ error: 'Username already exists' });
            }
            if (error.meta.target.includes('email')) {
              return res.status(500).json({ error: 'Email already exists' });
            }
          }
          console.error("Error creating user:", error);
          res.status(500).json({ error: 'An error occurred while creating the user' });
    }
  };
export const login  = async (req,res)=>{
    // db operations  
    const {username, password} = req.body;
    try {
        
        // Check if Users Exists
        const user = await prisma.user.findUnique({
            where:{ username }
        })

        if(!user) return res.status(401).json({message : "Invalid Credentials!"});

        // Check if Password matches
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) 
            return res.status(401).json({message : "Invalid Credentials!"});

        // GENERATE COOKIE TOKEN AND SEND TO THE USER (Generate access token to uniquely identify the user session)
        
        const age = 1000 * 60 * 60 * 24 * 7; // expiration time of JWT

        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: false,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        );

        const { password: userPassword, ...userInfo } = user; // remove the password and send it in cookies

        res
        .cookie ("token", token, {
            httpOnly: true,
            // secure : true, to be enabled when deployed
            maxAge : age, 
        })
        .status(200)
        .json(userInfo);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "Login Failed! Please try again" });

    }
    console.log("Login Endpoint");
}

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
