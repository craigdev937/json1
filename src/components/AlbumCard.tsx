import React from "react";
import "./AlbumCard.css";
import { IAlbum } from "../models/Interfaces";

type ALB = {
    album: IAlbum
};

export const AlbumCard = ({album}: ALB) => {
    return (
        <React.Fragment>
            <section className="album">
                <h1>AlbumID: {album.albumId}</h1>
                <h3>Color: {album.id}</h3>
                <p>Title: {album.title}</p>
                <img
                    alt={album.title}  
                    src={album.thumbnailUrl} 
                />
            </section>
        </React.Fragment>
    );
};


