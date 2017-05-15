/*global Phaser, Assets*/

var LAYERS = [
    "Grass",
    "GrassDetails",
    "Water",
    "ShoreVertical",
    "ShoreHorizontal",
    "House"
];

var Tilemap = function (game) {
    "use strict";
    this.game = game;
    this.tilemap = null;
};
Tilemap.prototype = {
    create: function () {
        "use strict";
        this.tilemap = this.game.add.tilemap(Assets.TILEMAP_KEY);
        this.tilemap.addTilesetImage(Assets.TILESET_JSON_KEY, Assets.TILESET_KEY);
        var i = 0;
        for (i = 0; i < LAYERS.length; i = i + 1) {
            this.tilemap.createLayer(LAYERS[i]);
        }
    }
};
