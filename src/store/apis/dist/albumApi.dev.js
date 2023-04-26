"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.albumsApi = exports.useFetchAlbumsQuery = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var albumsApi = (0, _react.createApi)({
  reducerPath: "albums",
  fetchBaseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: "http://localhost:3005"
  }),
  endpoints: function endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: function query(user) {
          return {
            url: "./albums",
            params: {
              userId: user.id
            },
            method: 'GET'
          };
        }
      }) // createAlbum: builder.mutation({
      //     query: (userId) => {
      //         return {
      //             url: "./albums",
      //             method: 'POST',
      //             body: {title, userId}
      //         };
      //     }
      // }),

    };
  }
});
exports.albumsApi = albumsApi;
albumsApi.useFetchAlbumsQuery();
var useFetchAlbumsQuery = albumsApi.useFetchAlbumsQuery;
exports.useFetchAlbumsQuery = useFetchAlbumsQuery;
//# sourceMappingURL=albumApi.dev.js.map
