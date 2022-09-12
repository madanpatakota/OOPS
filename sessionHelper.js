"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionHelper = void 0;
const sessionCore_js_1 = require("./sessionCore.js");
class sessionHelper extends sessionCore_js_1.sessionCore {
    constructor(name, Age, Location) {
        super(name);
    }
}
exports.sessionHelper = sessionHelper;
