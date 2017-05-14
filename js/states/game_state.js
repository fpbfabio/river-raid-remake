/*global Background, Player*/


var GameState = function (game) {
    "use strict";
    this.game = game;
    this.background = new Background(game);
    this.player = new Player(game);
};
GameState.prototype = {
    create: function () {
        "use strict";
        this.background.create();
        this.player.create();
    },
    update: function () {
        "use strict";
        this.player.update();
    }
};
