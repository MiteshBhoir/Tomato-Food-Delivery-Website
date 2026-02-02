import foodModel from "../models/foodModel.js"; 
import imageKit from "../config/imagekit.js";
//add food items
const addFood = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Image is required" });
  }
  const response = await imageKit.files.upload({
    file: req.file.buffer.toString('base64'),
    fileName: "file-name" + Date.now(),
  }); 

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: response.url,
    });
    try {
      await food.save();
      res.json({ success: true, message: "Food saved" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id); 
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { addFood, listFood, removeFood };
