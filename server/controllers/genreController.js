const Genre = require('../models/genre');

var Book = require('../models/book');
var async = require('async');

var mongoose = require('mongoose');

// Display list of all Genre.
exports.genre_list = function(req, res, next) {

  Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres) {
      if (err) { return next(err); }
      // Successful, so render.
      res.render('genre_list', { title: 'Genre List', list_genres:  list_genres});
    });

};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res, next) {

  var id = mongoose.Types.ObjectId(req.params.id); 
  
  async.parallel({
      genre: function(callback) {
          Genre.findById(req.params.id)
            .exec(callback);
      },

      genre_books: function(callback) {
        Book.find({ 'genre': req.params.id })
        .exec(callback);
      },

  }, function(err, results) {
      if (err) { return next(err); }
      if (results.genre==null) { // No results.
          var err = new Error('Genre not found');
          err.status = 404;
          return next(err);
      }
      // Successful, so render
      res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
  });

};

// 由 GET 显示创建藏书种类的表单
exports.genre_create_get = (req, res) => {
  res.send('未实现：藏书种类创建表单的 GET');
};

// 由 POST 处理藏书种类创建操作
exports.genre_create_post = (req, res) => {
  res.send('未实现：创建藏书种类的 POST');
};

// 由 GET 显示删除藏书种类的表单
exports.genre_delete_get = (req, res) => {
  res.send('未实现：藏书种类删除表单的 GET');
};

// 由 POST 处理藏书种类删除操作
exports.genre_delete_post = (req, res) => {
  res.send('未实现：删除藏书种类的 POST');
};

// 由 GET 显示更新藏书种类的表单
exports.genre_update_get = (req, res) => {
  res.send('未实现：藏书种类更新表单的 GET');
};

// 由 POST 处理藏书种类更新操作
exports.genre_update_post = (req, res) => {
  res.send('未实现：更新藏书种类的 POST');
};