/*global Assets, StateKeys*/


var SplashState = function (game) {
    "use strict";
    this.game = game;
};
SplashState.prototype = {
    preload: function () {
        "use strict";
        this.game.load.onLoadComplete.add(this.nextState, this);
        this.game.load.image(Assets.PLAYER_SPRITE_KEY, Assets.PLAYER_SPRITE_DIR);
    },
    nextState: function () {
        "use strict";
        this.game.state.start(StateKeys.GAME);
    }
};
