/*global Phaser, Assets, StateKeys*/


var SplashState = function (game) {
    "use strict";
    this.game = game;
};
SplashState.prototype = {
    preload: function () {
        "use strict";
        this.game.load.onLoadComplete.add(this.nextState, this);
        this.game.load.image(Assets.PLAYER_SPRITE_KEY,
                             Assets.PLAYER_SPRITE_DIR);
        this.game.load.image(Assets.BULLET_SPRITE_KEY,
                             Assets.BULLET_SPRITE_DIR);
        this.game.load.image(Assets.TILESET_KEY, Assets.TILESET_DIR);
        this.game.load.tilemap(Assets.TILEMAP_KEY, Assets.TILEMAP_DIR, null,
                               Phaser.Tilemap.TILED_JSON);
    },
    nextState: function () {
        "use strict";
        this.game.state.start(StateKeys.GAME);
    }
};
