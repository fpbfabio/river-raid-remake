/*global Phaser, Assets*/


var BULLET_POOL_SIZE = 1;
var BULLET_SPEED = 300;
var FIRE_RATE = 1000;
var WEAPON_POSITION_OFFSET_Y = -60;

var PlayerWeapon = function (game, player) {
    "use strict";
    this.game = game;
    this.weapon = null;
    this.player = player;
    this.fireButton = null;
};
PlayerWeapon.prototype = {
    create: function () {
        "use strict";
        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        this.weapon = this.game.add.weapon(BULLET_POOL_SIZE, Assets.BULLET_SPRITE_KEY);
        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.weapon.bulletSpeed = BULLET_SPEED;
        this.weapon.fireRate = FIRE_RATE;
        this.weapon.trackSprite(this.player.sprite, 0, WEAPON_POSITION_OFFSET_Y, false);
    },
    update: function () {
        "use strict";
        if (this.fireButton.isDown) {
            this.weapon.fire();
        }
    }
};
