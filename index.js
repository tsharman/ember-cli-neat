'use strict';
var path = require('path');
var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'ember-neat',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function() {
    var neatPath = path.join(this.app.bowerDirectory, 'neat', 'app/assets/stylesheets');
    var neatTree = pickFiles(this.treeGenerator(neatPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return neatTree;
  }
};
