import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare let google;

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})


export class Tab4Page implements OnInit {
  @ViewChild('map',{static:true}) mapElement:ElementRef;
  map:any;
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
    let marker = new google.maps.Marker({
      map:this.map,
      animation: google.maps.Animation.Drop,
      position: this.map.getCenter()
    })
    let infoWindow = new google.maps.InfoWindow({
      content: '<h4>Griffith</h4>'
      });
      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });
  }
  
}
