/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-neat',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeForStyles: function() {
    var bourbonPath = path.dirname(require.resolve('bourbon'));
    var bourbonFunnel = new Funnel(bourbonPath, {
      srcDir: 'app/assets/stylesheets',
      destDir: 'app/styles',
      annotation: 'Funnel (bourbon)'
    });

    var neatPath = path.dirname(require.resolve('bourbon-neat'));
    var neatFunnel = new Funnel(neatPath, {
      srcDir: 'app/assets/stylesheets',
      destDir: 'app/styles',
      annotation: 'Funnel (neat)'
    });

    return new MergeTrees([bourbonFunnel, neatFunnel]);
  }
};
