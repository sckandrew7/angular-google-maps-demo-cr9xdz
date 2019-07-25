import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 	33.5;
  lng: number = -84.5;
  name: '';
  meals: 0;
  pins: any;
  headers: any;

  constructor(private http: HttpClient){
    var pins
  }

  ngOnInit(){
    
  this.headers = new HttpHeaders()
  this.headers.set( 'x-query-key', 'qHP9S3pkQw2SOTRdYCfDX7DEJYcTNB6J2CLCx8t9') ;
  this.headers.set('Content-Type', 'application/json' );

  this.pins = this.http.get('https://of16j68py8.execute-api.us-east-2.amazonaws.com/v1/api/pull-pins', this.headers).subscribe(data=>{
    console.log(data);
  });

return this.pins;
  }


  clickedMarker(name: string, index: number) {
    console.log(`clicked the marker: ${name || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      name: '',
      meals: 0
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  markers: marker[] = this.pins;
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  name: string;
  addi?: string;
  meals: number;
}
