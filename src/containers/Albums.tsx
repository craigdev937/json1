import React from "react";
import { JSONAPI } from "../global/JSONAPI";
import { AlbumCard } from "../components/AlbumCard";

export const Albums = () => {
    const { error, isLoading, data } = JSONAPI.useAlbumsQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <main className="grid">
                {data?.map((album) => (
                    <AlbumCard 
                        key={album.id} album={album} 
                    />
                ))}     
            </main>   
        </React.Fragment>
    );
};


