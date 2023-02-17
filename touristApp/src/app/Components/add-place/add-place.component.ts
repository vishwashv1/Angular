import { Component } from '@angular/core';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent {
  AName:string="";
  APinCode:number=0;
  AState:string="";
  ADescription:string="";
  ASignificance:string="";
  ImageSource: any[]=[];
  ImagePath:string="";

  constructor(private  service:PlaceService)
  {

  }
  addImage()
  {
    this.ImageSource.push({ImageSource:this.ImagePath})
    
  }

  
  
  onAddNewPlace()
  {
    let place ={} as any;
    place.Name=this.AName;
    place.PinCode=this.APinCode;
    place.State=this.AState;
    place.Description=this.ADescription;
    place.Significance=this.ASignificance;
    place.ImageSource=this.ImageSource;
    this.service.onAddNewPlace(place).subscribe((data)=>{
      alert("Place details added ")
      
    });
    
  }
 
}


