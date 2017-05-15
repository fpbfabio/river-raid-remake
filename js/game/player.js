/*global Phaser, Assets, Screen*/


var Player = function (game) {
    "use strict";
    this.game = game;
    this.sprite = null;
};
Player.DISTANCE_TO_BORDER = 50;
Player.VELOCITY_X = 300;
Player.SPRITE_ANCHOR_X = 0.5;
Player.SPRITE_ANCHOR_Y = 0.5;
Player.prototype = {
    create: function () {
        "use strict";
        var y = Screen.HEIGHT - Player.DISTANCE_TO_BORDER;
        this.sprite = this.game.add.sprite(this.game.world.centerX, y, Assets.PLAYER_SPRITE_KEY);
        this.sprite.anchor.set(Player.SPRITE_ANCHOR_X, Player.SPRITE_ANCHOR_Y);
        this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    },
    update: function () {
        "use strict";
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.sprite.body.velocity.x = -Player.VELOCITY_X;
        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.sprite.body.velocity.x = Player.VELOCITY_X;
        } else {
            this.sprite.body.velocity.x = 0;
        }
    }
};
