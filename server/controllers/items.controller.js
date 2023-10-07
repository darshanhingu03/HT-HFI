const categories = require("../models/categories");
const items = require("../models/items");
const subCategories = require("../models/subCategories");

exports.addItems = async (req, res) => {
  const { name, sid, price, image } = req.body;
  const { id } = req.user_data;
  console.log(id);

  try {
    const add = new items({
      uid: id,
      sid,
      item_name: name,
      price,
      imageUrl: image,
    });
    await add.save();

    return res
      .status(201)
      .json({ success: true, message: "add item succesful." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    // const {} = req.;
    const get = await items.find();
    const data = get.map(async (item) => {
      const { _id, item_name, sid, price, imageUrl } = item;
      const categories = await subCategories.findById(sid);
      return {
        _id,
        item_name,
        subCategories: categories.categories_name,
        price,
        imageUrl,
      };
    });
    return res
      .status(200)
      .json({ success: true, data: await Promise.all(data) });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteItems = async (req, res) => {
  const { id } = req.params;
  try {
    const exist = await items.findById(id);
    if (!exist) {
      return res
        .status(400)
        .json({ success: false, messgae: "item is not available" });
    }
    await items.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "item deleted successful" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateItems = async (req, res) => {
  const { item_name, price, imageUrl, sid } = req.body;
  const { id } = req.params;
  try {
    const exist = await items.findById(id);
    if (!exist) {
      return res
        .status(400)
        .json({ success: false, messgae: "item is not available" });
    }
    await items.findByIdAndUpdate(id, {
      $set: {
        item_name: item_name !== "" ? item_name : exist.item_name,
        price: price !== "" ? price : exist.price,
        imageUrl: imageUrl !== "" ? imageUrl : exist.imageUrl,
        sid: sid !== "" ? sid : exist.sid,
      },
    });
    return res
      .status(200)
      .json({ success: true, message: "item updated successful" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.allItemForUser = async (req, res) => {
  const { id } = req.query;
  try {
    let exist = await categories.findById(id);
    let data;
    if (!exist) {
      data = await items.find();
      return res.status(200).json({ success: true, data });
    }
    const getSub = await subCategories.find({ mid: id });
    const data1 = getSub.map(async (item) => {
      const { _id } = item;
      const getItem = await items.find({ sid: _id });
      return getItem;
    });
    return res
      .status(200)
      .json({ success: true, data: await Promise.all(data1) });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
