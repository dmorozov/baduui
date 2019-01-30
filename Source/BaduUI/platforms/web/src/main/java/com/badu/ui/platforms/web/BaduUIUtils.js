goog.module('badu.ui.BaduUI');

// Here we use goog.require to import the Java HelloWorld class to this module.
const BaduUI = goog.require('com.badu.ui.platforms.web.BaduUI');

exports = goog.defineClass(BaduUI, {
    /**
     * @param {string} value
     */
    constructor(value) {
        this.prop = value;
    },

    statics: {
        someFunction() {
            return () => 42
        }
    },

    /**
     * @param {string} param
     * @return {number}
     */
    start() {
        document.write('Ver 2: ' + this.getHelloWorld() + ' and JS!');
        return 0;
    },
});
