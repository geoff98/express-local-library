var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = Schema(
  {
    product_name: {type: String, required: true, max: 100},
    product_description: {type: String, required: true, max: 100},
    product_sku: {type: Number},
    product_price: {type: NumberDecimal},
  }
);

// Virtual for author's URL
ProductSchema
.virtual('url')
.get(function () {
  return '/catalog/product/' + this._id;
});

//Export model
module.exports = mongoose.model('Product', ProductSchema);