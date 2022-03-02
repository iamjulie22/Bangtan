export default interface Album {
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
  conceptPhotos: {
    img1:string;
    img2: string;
  }
}
