"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.useUserStore = void 0;
var zustand_1 = require("zustand");
exports.useUserStore = (0, zustand_1.create)(function (set) { return ({
    skillCoins: 10,
    notifications: [],
    savedTeachers: [],
    addCoins: function (amount) { return set(function (state) { return ({ skillCoins: state.skillCoins + amount }); }); },
    addNotification: function (msg) { return set(function (state) { return ({ notifications: __spreadArray(__spreadArray([], state.notifications, true), [msg], false) }); }); },
    saveTeacher: function (id) { return set(function (state) { return ({ savedTeachers: __spreadArray(__spreadArray([], state.savedTeachers, true), [id], false) }); }); }
}); });
