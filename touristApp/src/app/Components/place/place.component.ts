import { Component } from '@angular/core';
import { Place } from 'src/app/Module/place';
import { PlaceService } from 'src/app/Services/place.service';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlacesComponent {
  searchCondition:string="";
  show :number =0;
  tourist : Place[] = [];
  selectedImages : string[] = [];
  selectedPlace : Place = {} as Place;
  ngOnInit(): void
  {
    this.service.getAllPlaces().subscribe((data : Place[])=>{
      this.tourist = data;
    })
  }
  constructor(private service : PlaceService){

  }
 
  viewplace(places : Place){

    this.selectedPlace = places;
    let ObservableObj = this.service.getAllImages(this.selectedPlace.PlaceId);
    let tempdata : any[] = [];

    ObservableObj.subscribe((data : any) => {
      for (const img of data) {
        let tempImg = img.ImageSource.replace("./","/");
        tempdata.push("assets" + tempImg)
      }
      this.selectedImages = tempdata; 
    })
  }
  onAddNew(){
    if(this.show==1){
      this.show=0;
    }
    else{
      this.show=1;
    }
  }
}


