"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersReducer = void 0;

var _toolkit = require("@reduxjs/toolkit");

var usersSlice = (0, _toolkit.createSlice)({
  name: 'users',
  initialState: {
    data: []
  },
  reducers: {}
});
var usersReducer = usersSlice.reducer;
exports.usersReducer = usersReducer;
//# sourceMappingURL=usersSlice.dev.js.map
