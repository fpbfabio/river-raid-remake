/*global Assets, Level*/


var Background = function (game) {
    "use strict";
    this.game = game;
    this.levels = [];
};
Background.prototype = {
    create: function () {
        "use strict";
        var level = this.instantiateTilemap(Assets.TILEMAP_KEY);
        level.setTilemapPosition(0, 0);
        this.levels.push(level);
    },
    update: function () {
        "use strict";
        this.updateLevels();
        this.createTopLevel();
        this.destroyBottomLevel();
    },
    instantiateTilemap: function (resourceKey) {
        "use strict";
        var level = new Level(this.game, resourceKey);
        level.create();
        return level;
    },
    updateLevels: function () {
        "use strict";
        this.levels.forEach(function (level) {
            level.update();
        });
    },
    createTopLevel: function () {
        "use strict";
        var level, topLevel, y;
        topLevel =  this.levels[0];
        if (topLevel.y > 0) {
            level = this.instantiateTilemap(Assets.TILEMAP_KEY);
            y = topLevel.y - level.getHeight();
            level.setTilemapPosition(0, y);
            this.levels.unshift(level);
        }
    },
    destroyBottomLevel: function () {
        "use strict";
        var bottomIndex, worldBottomBound, bottomLevel;
        bottomIndex = this.levels.length - 1;
        bottomLevel =  this.levels[bottomIndex];
        worldBottomBound = this.game.world.bounds.y +
            this.game.world.bounds.height;
        if (bottomLevel.y > worldBottomBound) {
            bottomLevel.destroy();
            this.levels.splice(bottomIndex, 1);
        }
    }
};
