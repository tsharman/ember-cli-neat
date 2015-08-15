'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-neat',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function() {
    var bourbonPath = path.join(this.app.bowerDirectory, 'bourbon', 'app/assets/stylesheets');
    var bourbonTree = new Funnel(this.treeGenerator(bourbonPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    var neatPath = path.join(this.app.bowerDirectory, 'neat', 'app/assets/stylesheets');
    var neatTree = new Funnel(this.treeGenerator(neatPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return new MergeTrees([bourbonTree, neatPath]);
  }
};
