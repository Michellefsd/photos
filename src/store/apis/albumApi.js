import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    reducerPath: "albums",
    fetchBaseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    })
});

