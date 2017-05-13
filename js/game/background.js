var Background = function (game) {
    "use strict";
    this.game = game;
    this.sprite = null;
};
Background.prototype = {
    create: function () {
        "use strict";
        this.game.stage.backgroundColor = "#1BDCFF";
    }
};
