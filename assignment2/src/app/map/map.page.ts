import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { WorkoutmodalPage } from '../workoutmodal/workoutmodal.page';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';


declare let google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  //@ViewChild('map',{static:true}) mapElement:ElementRef;
  @ViewChild('map',{static:true}) mapElement:ElementRef;
  private map:any;
  locations = [
    {loc: "World Gym", lat:-27.22360997953546, lng:153.00062252668548},
    {loc:"Combat Zone", lat:-27.227680384416697, lng:152.99060571155775},
    {loc:"F45", lat:-27.22792042248405, lng:153.00329793404026}
    ]
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit Tab4Page');
    let latLng = new google.maps.LatLng(-27.5530, 153.0512);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement , mapOptions);

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.map.setCenter(pos)
      });
    } else {
      alert("Geolocation services unsupported on current device.")
    }
    var i
    for (i = 0; i < this.locations.length; i++) {
      let markerLoc = { lat: this.locations[i].lat, lng: this.locations[i].lng };
      let markerName = this.locations[i].loc;
      let marker = new google.maps.Marker({
        position: markerLoc,
        map:this.map,
        animation: google.maps.Animation.Drop
        
      })
      let infoWindow = new google.maps.InfoWindow({
        content: markerName
      });
      google.maps.event.addListener(marker, 'click', () => {
        var div = document.createElement('div');
        div.innerHTML = markerName;
        div.onclick = function(){markClick(markerName)};
        infoWindow.setContent(div);
        infoWindow.open(this.map, marker);
        
      });

    }
    function markClick(str){
      console.log(str)
      
    }
  }

  

     // var latLng = new google.maps.LatLng(locations[0][1],locations[0][2])
    // let marker1 = new google.maps.Marker({
      
    //   animation: google.maps.Animation.Drop,
    //   position: latLng,
    //   map:this.map,
    // });
    // let infoWindow = new google.maps.InfoWindow({
    //   content: `<h3>${locations[0][0]}</h3>`
    // });
    // google.maps.event.addListener(marker1, 'click', () => {
    //   infoWindow.open(this.map, marker1)
    // })
}
