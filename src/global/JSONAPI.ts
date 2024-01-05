import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAlbum, IPost, IUser } from "../models/Interfaces";
const URL = "https://jsonplaceholder.typicode.com";

export const JSONAPI = createApi({
    reducerPath: "JSONAPI",
    tagTypes: ["Albums", "Comments", "Users"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        albums: builder.query<IAlbum[], void>({
            query: () => ({
                url: `/albums/1/photos`,
                method: "GET"
            }),
            providesTags: ["Albums"]
        }),
    }),
});


