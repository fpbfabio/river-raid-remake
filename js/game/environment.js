/*global Phaser, Screen*/


var WORLD_BOUND_X = 0;
var WORLD_BOUND_Y = 0;
var WORLD_BOUND_WIDTH = Screen.WIDTH;
var WORLD_BOUND_HEIGHT = Screen.HEIGHT;

var Environment = function (game) {
    "use strict";
    this.game = game;
};
Environment.prototype = {
    create: function () {
        "use strict";
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(WORLD_BOUND_X, WORLD_BOUND_Y, WORLD_BOUND_WIDTH, WORLD_BOUND_HEIGHT);
    }
};
