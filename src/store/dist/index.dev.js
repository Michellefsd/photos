"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _usersSlice = require("./slices/usersSlice");

var store = (0, _toolkit.configureStore)({
  reducer: {
    users: _usersSlice.usersReducer
  }
});
exports.store = store;
//# sourceMappingURL=index.dev.js.map
