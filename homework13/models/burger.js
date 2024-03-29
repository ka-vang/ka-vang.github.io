var orm = require("../config/orm.js");
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");

// var Burgers = sequelize.define("burgers", {
//   burger_name:  Sequelize.STRING,
//   devoured: Sequelize. BOOLEAN
// });

// Burgers.sync();

// module.exports = Burgers;
//   selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },

//   insertOne: function(cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },

//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },

//   deleteOne: function(condition, cb) {
//     orm.deleteOne("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// module.exports = burger;