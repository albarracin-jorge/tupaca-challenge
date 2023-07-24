import mongoose from "mongoose"
export const connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tupaca", {
            authSource: "admin",
            user: "admin",
            pass: "password",
        });
    } catch (error) {
        console.log(error);
    }
}
