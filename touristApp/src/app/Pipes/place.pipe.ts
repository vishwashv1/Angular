import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../Module/place';

@Pipe({
  name: 'place'
})
export class PlacePipe implements PipeTransform {

  transform(places: Place[], args: string): Place[] {
    if(args=="")
    return places;
    else
    return places.filter((p:Place) =>p.Name.includes(args));

   
  }

}
