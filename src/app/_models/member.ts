export interface Member {
    img: string;
    img2: string;
    id: number;
    name: string;
    stageName: string;
    born: string;
    age: number;
    occupation: string;
    position: string;
    info: string;
    soloSongs: [
        {
            song: string;
        } 
    ],
    mixtapes?: [
        {
            name: string;
            songs: [
                {
                    song: string;
                }
            ]
        }
    ],
    soloYtlinks:[
        {
          link:string;
        }
    ]
}