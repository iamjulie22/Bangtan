export interface Show{
          id:number;
          img: string;
          title:string;
          info: string;
          links: [
            {
              linkId:number;
              link: string;
            }
          ]
        }