export interface Album {
  id:number;
  albumTitle: string;
  albumImg:string;
  info:string;
  trackList: [
    {
      songId:number;
      songTitle:string;
      songLength:string;
    }
  ],
  conceptPhotos:[
     {
       img:string;
     }
  ]
}
