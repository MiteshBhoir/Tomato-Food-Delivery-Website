import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}/FOOD`)
        .then(() => {
            console.log("connected to db")
        }).catch((err) => {
            console.log(err)
        })

}
