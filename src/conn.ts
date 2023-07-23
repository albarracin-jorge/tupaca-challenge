import mongoose from "mongoose"
export const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tupaca", {
            authSource: "admin",
            user: "admin",
            pass: "password",
        });
    } catch (error) {
        console.log(error);
    }
}
