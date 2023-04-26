"use strict";

var _react = require("@reduxjs/toolkit/query/react");

var albumsApi = (0, _react.createApi)({
  reducerPath: "albums",
  fetchBaseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: "http://localhost:3005"
  })
});
//# sourceMappingURL=albumApi.dev.js.map
