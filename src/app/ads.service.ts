
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdsService {
  data = [
    {
      "image": "",
      "video": "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
      "from_time": "12/05/2021 06:25:00 PM",
      "to_time": "12/05/2021 06:27:00 PM"
      },
      {
      "image": "https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg",
      "video": "",
      "from_time": "12/05/2021 06:28:00 PM",
      "to_time": "12/05/2021 06:30:00 PM"
      },
      {
      "image": "",
      "video": "http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4",
      "from_time": "12/05/2021 06:31:00 PM",
      "to_time": "12/05/2021 06:33:00 PM"
      },
      {
      "image": "https://i0.wp.com/i.pinimg.com/originals/65/93/a7/6593a77ba62b2373b10075373f43efc9.jpg",
      "video": "",
      "from_time": "12/05/2021 06:34:00 PM",
      "to_time": "12/05/2021 06:35:00 PM"
      },
      {
      "image": "",
      "video": "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
      "from_time": "12/05/2021 06:35:00 PM",
      "to_time": "12/05/2021 06:37:00 PM"
      },
      {
      "image": "https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg",
      "video": "",
      "from_time": "12/05/2021 06:38:00 PM",
      "to_time": "12/05/2021 06:40:00 PM"
      },
      {
      "image": "",
      "video": "http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4",
      "from_time": "12/05/2021 06:41:00 PM",
      "to_time": "12/05/2021 06:43:00 PM"
      },
      {
      "image": "https://i0.wp.com/i.pinimg.com/originals/65/93/a7/6593a77ba62b2373b10075373f43efc9.jpg",
      "video": "",
      "from_time": "12/05/2021 06:44:00 PM",
      "to_time": "12/05/2021 06:46:00 PM"
      },
      {
      "image": "https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg",
      "video": "",
      "from_time": "12/05/2021 06:47:00 PM",
      "to_time": "12/05/2021 06:50:00 PM"
      },
      {
      "image": "https://images.unsplash.com/photo-1609607847926-da4702f01fef?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&w=1000&q=80",
      "video": "",
      "from_time": "12/05/2021 06:51:00 PM",
      "to_time": "12/05/2021 06:53:00 PM"
      }
  ]

  ads: BehaviorSubject<Array<any>> = new BehaviorSubject(this.data);
  
  constructor () { }

 addAds(data:any) {
    let oldAds = this.ads.getValue()
    oldAds.push(data)
    this.ads.next(oldAds)  
 }

 getSpecificAd (data:number)
 {
  let oldAds = this.ads.getValue()
  let specific = oldAds[data]
  return specific 
 }

 updateAds(data:any , index :number)
 {
  let oldAds = this.ads.getValue()
  oldAds.splice(index,1,data)
  this.ads.next(oldAds)
 }
deleteAd( index :number)
{
  let oldAds = this.ads.getValue()
  oldAds.splice(index,1)
  this.ads.next(oldAds) 
}
}
