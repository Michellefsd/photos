import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    //createApi make an slice and save it in the store in the reducerPath
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
// object that return diferent requests we want to make
        return {
// name: builder.query({query: ()=> {return details }})
//  info **** endPoints questions on README
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: './albums',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    };
                },
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
    },
});

// albumsApi.useFetchAlbumsQuery();

// TO USE THE FX **use{name}Query 
export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };