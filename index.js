'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-neat',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function() {
    var neatPath = path.join(this.app.bowerDirectory, 'neat', 'app/assets/stylesheets');
    var neatTree = new Funnel(this.treeGenerator(neatPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return neatTree;
  }
};
