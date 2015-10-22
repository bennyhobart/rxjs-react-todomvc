'use strict';

var jsdom = require("jsdom");
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
propagateToGlobal(document.defaultView);

function propagateToGlobal (window) {
    for (let key in window) {
        if (!window.hasOwnProperty(key)) continue
        if (key in global) continue
        global[key] = window[key]
    }
}
