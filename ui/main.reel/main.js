/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

// This also can load http2-cache if un commented
// var Http2CAche = require('http2-cache');

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    titleValue: {
    	get: function () {
    		return "Temperature Converter";
    	}
    }
});
