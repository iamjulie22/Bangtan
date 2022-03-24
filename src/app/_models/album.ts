export interface Album {
  id: number;
  albumTitle: string;
  albumImg: string;
  info: string;
  trackList: [
    {
      id: number;
      songTitle: string;
      songLength: string;
    }
  ]
  conceptPhotos: [
    {
      img: string;
    }
  ]
  ytLinks: [
    {
      link: string;
    }
  ]
}
