import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsService } from '../ads.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboerd',
  templateUrl: './dashboerd.component.html',
  styleUrls: ['./dashboerd.component.css']
})
export class DashboerdComponent implements OnInit {

  ads:any 
  adType:string = ''
  urlAd:string = ""
  startAd:string=""
  endAd:string=""
  error:string=''
  currentIndex:number=-1
  constructor( private _AdsService:AdsService ,private _AuthService:AuthService,private _Router:Router ) {
    this.ads=this._AdsService.ads.getValue()
   }

  ngOnInit(): void {
  }
clearInput()
{
  this.urlAd=''
  this.adType=''
  this.startAd=''
  this.endAd=''
}
  add(url:string,start:string,end:string){
    let newAd 
    if (this.adType=="image")
    {
      newAd={
      "image" : url ,
      "video": "",
      "from_time": start ,
      "to_time": end
    }
  }
    else if (this.adType=="video")
    {
      newAd={
        "image":"",
        "video" : url ,
        "from_time": start ,
        "to_time": end
      }

    }
    this._AdsService.addAds(newAd)
    this.clearInput()
  }
  updateExist(url:string,start:string,end:string)
  {
if(this.currentIndex>-1)
{
  let updatedAd
  if (this.adType=="image")
  {
    updatedAd={
    "image" : url ,
    "video": "",
    "from_time": start ,
    "to_time": end
  }
}
  else if (this.adType=="video")
  {
    updatedAd={
      "image":"",
      "video" : url ,
      "from_time": start ,
      "to_time": end
    }

  }
  this._AdsService.updateAds(updatedAd , this.currentIndex)
  this.clearInput()
}
else {
  this.error = "you didnt select any Ad to update"
}
   

  }
  update(i:number)
  {
    this.error=''
    this.currentIndex=i
    let x = this._AdsService.getSpecificAd(i)
    if(x.image =="")
    {
      this.urlAd=x.video 
      this.startAd=x.from_time
      this.endAd=x.to_time
      this.adType='video'
      
    }
    else if(x.video=="")
    {
      this.urlAd=x.image 
      this.startAd=x.from_time
      this.endAd=x.to_time
      this.adType='image'
    }
  }
  delete(index:number)
  {
    this._AdsService.deleteAd(index)
    this.clearInput()
  }
  Out()
  {
    localStorage.clear()
    this._AuthService.logOut()
    this._Router.navigate(['/login'])
  }
}
