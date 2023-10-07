const { model, Schema } = require("mongoose");

const items = new Schema({
  uid: Schema.Types.ObjectId,
  item_name: String,
  sid: Schema.Types.ObjectId,
  price: String,
  imageUrl: String,
});
module.exports = model("items", items);
