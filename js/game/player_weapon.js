/*global Phaser, Assets*/


var PlayerWeapon = function (game, player) {
    "use strict";
    this.game = game;
    this.weapon = null;
    this.player = player;
    this.fireButton = null;
};
PlayerWeapon.BULLET_POOL_SIZE = 1;
PlayerWeapon.BULLET_SPEED = 300;
PlayerWeapon.FIRE_RATE = 1000;
PlayerWeapon.WEAPON_POSITION_OFFSET_Y = -60;
PlayerWeapon.prototype = {
    create: function () {
        "use strict";
        var keyboard = this.game.input.keyboard;
        this.fireButton = keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        this.weapon = this.game.add.weapon(PlayerWeapon.BULLET_POOL_SIZE,
                                           Assets.BULLET_SPRITE_KEY);
        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.weapon.bulletSpeed = PlayerWeapon.BULLET_SPEED;
        this.weapon.fireRate = PlayerWeapon.FIRE_RATE;
        this.weapon.trackSprite(this.player.sprite, 0,
                                PlayerWeapon.WEAPON_POSITION_OFFSET_Y, false);
    },
    update: function () {
        "use strict";
        if (this.fireButton.isDown) {
            this.weapon.fire();
        }
    }
};
