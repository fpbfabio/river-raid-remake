/*global Level*/


var Background = function (game) {
    "use strict";
    this.game = game;
    this.levels = [];
};
Background.prototype = {
    create: function () {
        "use strict";
        var level = new Level(this.game);
        this.levels.push(level);
        level.create();
    },
    update: function () {
        "use strict";
        this.updateLevels();
        this.createTopLevel();
        this.destroyBottomLevel();
    },
    updateLevels: function () {
        "use strict";
        this.levels.forEach(function (level) {
            level.update();
        });
    },
    createTopLevel: function () {
        "use strict";
        var level, topLevel;
        topLevel =  this.levels[0];
        if (topLevel.y > 0) {
            level = new Level(this.game);
            level.create();
            level.setTilemapPosition(0, topLevel.y - level.getHeight());
            this.levels.unshift(level);
        }
    },
    destroyBottomLevel: function () {
        "use strict";
        var bottomIndex, worldBottomBound, bottomLevel;
        bottomIndex = this.levels.length - 1;
        bottomLevel =  this.levels[bottomIndex];
        worldBottomBound = this.game.world.bounds.y + this.game.world.bounds.height;
        if (bottomLevel.y > worldBottomBound) {
            bottomLevel.destroy();
            this.levels.splice(bottomIndex, 1);
        }
    }
};
