/*global Phaser, Assets*/


var Level = function (game) {
    "use strict";
    this.game = game;
    this.tilemap = null;
    this.layers = [];
    this.x = 0;
    this.y = 0;
};
Level.VELOCITY_Y = 1;
Level.LAYERS = [
    "Grass",
    "GrassDetails",
    "Water",
    "ShoreVertical",
    "ShoreHorizontal",
    "House"
];
Level.prototype = {
    create: function () {
        "use strict";
        this.tilemap = this.game.add.tilemap(Assets.TILEMAP_KEY);
        this.tilemap.addTilesetImage(Assets.TILESET_JSON_KEY, Assets.TILESET_KEY);
        var i = 0, layer;
        for (i = Level.LAYERS.length - 1; i >= 0; i = i - 1) {
            layer = this.tilemap.createLayer(Level.LAYERS[i]);
            layer.fixedToCamera = false;
            layer.scrollFactorX = 0;
            layer.scrollFactorY = 0;
            layer.sendToBack();
            this.layers.push(layer);
        }
    },
    update: function () {
        "use strict";
        this.setTilemapPosition(0, this.y + Level.VELOCITY_Y);
    },
    setTilemapPosition: function (x, y) {
        "use strict";
        var i = 0, layer;
        this.x = x;
        this.y = y;
        for (i = 0; i < this.layers.length; i = i + 1) {
            layer = this.layers[i];
            layer.position.set(x, y);
        }
    },
    getHeight: function () {
        "use strict";
        return this.tilemap.height * this.tilemap.tileHeight;
    },
    getWidth: function () {
        "use strict";
        return this.tilemap.width * this.tilemap.tileWidth;
    },
    destroy: function () {
        "use strict";
        this.layers.forEach(function (layer) {
            layer.destroy();
        });
        this.layers = [];
        this.tilemap.destroy();
    }
};
