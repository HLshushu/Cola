const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res, next) {

  BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });
    
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res, next) {

  BookInstance.findById(req.params.id)
  .populate('book')
  .exec(function (err, bookinstance) {
    if (err) { return next(err); }
    if (bookinstance==null) { // No results.
        var err = new Error('Book copy not found');
        err.status = 404;
        return next(err);
      }
    // Successful, so render.
    res.render('bookinstance_detail', { title: 'Book:', bookinstance:  bookinstance});
  })

};

// 由 GET 显示创建藏书副本的表单
exports.bookinstance_create_get = (req, res) => {
  res.send('未实现：藏书副本创建表单的 GET');
};

// 由 POST 处理藏书副本创建操作
exports.bookinstance_create_post = (req, res) => {
  res.send('未实现：创建藏书副本的 POST');
};

// 由 GET 显示删除藏书副本的表单
exports.bookinstance_delete_get = (req, res) => {
  res.send('未实现：藏书副本删除表单的 GET');
};

// 由 POST 处理藏书副本删除操作
exports.bookinstance_delete_post = (req, res) => {
  res.send('未实现：删除藏书副本的 POST');
};

// 由 GET 显示更新藏书副本的表单
exports.bookinstance_update_get = (req, res) => {
  res.send('未实现：藏书副本更新表单的 GET');
};

// 由 POST 处理藏书副本更新操作
exports.bookinstance_update_post = (req, res) => {
  res.send('未实现：更新藏书副本的 POST');
};