    import { Request, Response } from "express";
    import { generateToken } from "../utils/generationToken";
    import User from "../models/user";

    const otpStore = new Map<string, string>();

    export const loginUser = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { mobile } = req.body;
            console.log("mobile",mobile);
            console.log("authController.loginUser called");
            console.log("Login request received:", req.body);

            if (!mobile) {
                return res.status(400).json({
                    success: false,
                    message: "mobile number is required ",
                });
            }

            console.log("Generating OTP for mobile:", mobile);
            let user = await User.findOne({ mobile });

            if (!user) {
                user = await User.create({ mobile });
            }

            const otp = generateandSendOtp();
            console.log("Backend OTP generated:", otp);
            user.otp = otp;
            console.log("Backend OTP generated:", otp);

            await user.save();

            function generateandSendOtp() {
                const otp = Math.floor(100000 + Math.random() * 900000).toString();
                otpStore.set(mobile,otp)
                console.log("Generated OTP:", otp);
                return otp;
            }

            return res.status(200).json({
                success: true,
                message: "otp generated successfully",
                otp,
                user,
                
            });
        }
        catch (error: any) {
            return res.status(500).json({
                success: false,
                message: `Server Error: ${error.message}`,
            });
        }
    };


    export const verifyOtp = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { mobile, otp } = req.body;
            console.log("Request Body:", req.body);
            console.log("Mobile From Request:", mobile);
            console.log("OTP From Request:", otp);

            if (!mobile || !otp) {
                return res.status(400).json({
                    success: false,
                    message: "Mobile and OTP are required ",

                });
            }



            const user = await User.findOne({ mobile });
            console.log("User Found:", user);
            console.log("OTP from request:", otp);
            console.log("OTP From DB:", user?.otp);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
            console.log(user.otp, otp)
            if (user.otp.includes(otp)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid OTP",

                });
            }
            user.otp = "";
            await user.save();
                    

            // 🔐 JWT GENERATION (ADD THIS HERE)
        const token = generateToken({
            id: user._id.toString(),
            
        });

        // 🍪 send cookie
        res.cookie("token", token, {
        httpOnly: false,
        secure: false, // true in production
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        });

            return res.status(200).json({
                success: true,
                message: "otp verification successfully",
                user,
                token
                

            });
        }
        catch (error: any) {
            return res.status(500).json({
                success: false,
                message: `Server Error: ${error.message}`,
            });
        }
    }

