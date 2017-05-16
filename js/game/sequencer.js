/*global Assets*/


var Sequencer = function () {
    "use strict";
    this.currentKeyIndex = 0;
};
Sequencer.TILEMAP_KEY_SEQUENCE = [Assets.TILEMAP_KEY, Assets.TILEMAP2_KEY,
                                  Assets.TILEMAP3_KEY, Assets.TILEMAP4_KEY,
                                  Assets.TILEMAP5_KEY];
Sequencer.prototype = {
    generateFirstTilemapKey: function () {
        "use strict";
        return Sequencer.TILEMAP_KEY_SEQUENCE[0];
    },
    generateNextTilemapKey: function () {
        "use strict";
        this.currentKeyIndex += 1;
        this.currentKeyIndex %= Sequencer.TILEMAP_KEY_SEQUENCE.length;
        return Sequencer.TILEMAP_KEY_SEQUENCE[this.currentKeyIndex];
    }
};
