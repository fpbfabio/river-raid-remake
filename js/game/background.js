/*global Level, Sequencer*/


var Background = function (game) {
    "use strict";
    this.game = game;
    this.sequencer = null;
    this.levels = [];
};
Background.prototype = {
    create: function () {
        "use strict";
        var level, resourceKey;
        this.sequencer = new Sequencer();
        resourceKey = this.sequencer.generateFirstTilemapKey();
        level = this.instantiateTilemap(resourceKey);
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
        var level, topLevel, resourceKey, y;
        topLevel =  this.levels[0];
        if (topLevel.y > 0) {
            resourceKey = this.sequencer.generateNextTilemapKey();
            level = this.instantiateTilemap(resourceKey);
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
