export interface IAlbum {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

export interface IPost {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
};

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};


