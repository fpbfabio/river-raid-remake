/*global Phaser, Screen*/


var Environment = function (game) {
    "use strict";
    this.game = game;
};
Environment.WORLD_BOUND_X = 0;
Environment.WORLD_BOUND_Y = 0;
Environment.WORLD_BOUND_WIDTH = Screen.WIDTH;
Environment.WORLD_BOUND_HEIGHT = Screen.HEIGHT;
Environment.prototype = {
    create: function () {
        "use strict";
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(Environment.WORLD_BOUND_X,
                                  Environment.WORLD_BOUND_Y,
                                  Environment.WORLD_BOUND_WIDTH,
                                  Environment.WORLD_BOUND_HEIGHT);
    }
};
