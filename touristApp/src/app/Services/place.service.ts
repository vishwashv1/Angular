import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Place } from '../Module/place';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  url : string = 'http://localhost:50764/api/tourist';

  constructor(private proxy: HttpClient) {

  }

  public getAllPlaces() : Observable<Place[]>{
    return this.proxy.get<Place[]>(this.url);
  }
  public getAllImages(PlaceID :number)
  {
    let tempUrl ="http://localhost:50764/api/tourist/Images/" + PlaceID;
    return this.proxy.get(tempUrl);

   }
   public onAddNewPlace(place :Place)
   {
    let tempUrl ="http://localhost:50764/api/tourist";
    return this.proxy.post(tempUrl,place);
   }
}
