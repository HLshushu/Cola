const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: { type: Schema.ObjectId, ref: 'Book', required: true }, // Reference to the associated book.
  imprint: {type: String, required: true},
  status: {type: String, required: true, enum:['Available', 'Maintenance', 'Loaned', 'Reserved'], default:'Maintenance'},
  due_back: { type: Date, default: Date.now },
});

// 虚拟属性'url'：藏书副本 URL
BookInstanceSchema
  .virtual('url')
  .get(function () {
    return '/catalog/bookinstance/' + this._id;
  });

// 导出 BookInstancec 模型
module.exports = mongoose.model('BookInstance', BookInstanceSchema);