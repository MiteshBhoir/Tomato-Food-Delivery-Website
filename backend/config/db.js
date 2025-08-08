import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://miteshbhoir585:96536379000@cluster0.spi85.mongodb.net/FOOD')
        .then(() => {
            console.log("connected to db")
        }).catch((err) => {
            console.log(err)
        })

}
