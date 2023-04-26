import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    reducerPath: "albums",
    fetchBaseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: "./albums",
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    };
                }
            }),
            // createAlbum: builder.mutation({
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

albumsApi.useFetchAlbumsQuery();

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };