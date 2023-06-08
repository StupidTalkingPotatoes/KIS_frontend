import React, { useEffect, useState } from 'react';
import BusMark from '../../Images/mark.png';
import Current from '../../Images/current.png';
import BigBusMark from '../../Images/bigmark.png';
import BigWalkingMark from '../../Images/bigmark_grey.png';
 
function getCurrentPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  });
}

const Map = ({ departureLatitude, departureLongitude, destinationLatitude, destinationLongitude }) => {
  const { naver } = window;
  const [list, setList] = useState(null);
  const [point, setPoint] = useState({ coords: { latitude: 36.14567, longitude: 128.39261 } });

  useEffect(() => {
    getCurrentPosition()
    .then(point => setPoint(point))
  }, [])

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://119.56.230.204:506/paths?departureLongitude=${departureLongitude}&departureLatitude=${departureLatitude}&arrivalLongitude=${destinationLongitude}&arrivalLatitude=${destinationLatitude}`, requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [destinationLongitude])

  useEffect(() => {
    const current = new naver.maps.LatLng(point.coords.latitude, point.coords.longitude); 

    const map = new naver.maps.Map('map', {
      center: current,
      zoom: 13,
    });

    const currentMarker = new naver.maps.Marker({
      map,
      position: current,
      icon: {
        url: Current,
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
      }
    })

    // eslint-disable-next-line no-lone-blocks
    {list && list[0]?.stepList?.map((items, index) => {
      
      // 출발지에서 걸어가야 할 때 
      if (items.type == "WALKING" && index == 0) {
        const walkingMarker = new naver.maps.Marker({
          map,
          position: new naver.maps.LatLng(departureLatitude, departureLongitude),
          icon: {
            url: BigWalkingMark,
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
          }
        })

        var infowindow = new naver.maps.InfoWindow({
          content: [`<p style="position: relative; top: 95px; left: -8px; color: #808080; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #808080;"> 출발 </p>`].join(''),
          borderWidth: 0,
          backgroundColor: "transparent",
          disableAnchor: true
        });

        naver.maps.Event.addListener(walkingMarker, "click", function(e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, walkingMarker); }
        });
      }
    
      // 도착지까지 걸어가야 할 때 
      if (items.type == "WALKING" && index == list[0].stepList.length - 1) {
        const walkingMarker = new naver.maps.Marker({
          map,
          position: new naver.maps.LatLng(destinationLatitude, destinationLongitude),
          icon: {
            url: BigWalkingMark,
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
          }
        })

        var infowindow = new naver.maps.InfoWindow({
          content: [`<p style="position: relative; top: 95px; left: -8px; color: #808080; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #808080;"> 도착 </p>`].join(''),
          borderWidth: 0,
          backgroundColor: "transparent",
          disableAnchor: true
        });

        naver.maps.Event.addListener(walkingMarker, "click", function(e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, walkingMarker); }
        });
      }

      // 출발지에서 버스탈 때 
      if (items.type == "BUS" && index == 0) {
        const BigbusMarker = new naver.maps.Marker({
          map,
          position: new naver.maps.LatLng(departureLatitude, departureLongitude),
          icon: {
            url: BigBusMark,
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
          }
        })

        var infowindow = new naver.maps.InfoWindow({
          content: [`<p style="position: relative; top: 95px; left: -8px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> 출발 </p>`].join(''),
          borderWidth: 0,
          backgroundColor: "transparent",
          disableAnchor: true
        });

        naver.maps.Event.addListener(BigbusMarker, "click", function(e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, BigbusMarker); }
        });
      }
    
      // 도착지까지 버스탈 때 
      if (items.type == "BUS" && index == list[0].stepList.length - 1) {
        const BigbusMarker = new naver.maps.Marker({
          map,
          position: new naver.maps.LatLng(destinationLatitude, destinationLongitude),
          icon: {
            url: BigBusMark,
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
          }
        })

        var infowindow = new naver.maps.InfoWindow({
          content: [`<p style="position: relative; top: 95px; left: -8px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> 도착 </p>`].join(''),
          borderWidth: 0,
          backgroundColor: "transparent",
          disableAnchor: true
        });

        naver.maps.Event.addListener(BigbusMarker, "click", function(e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, BigbusMarker); }
        });
      }

      if (items.type == "BUS" && index > 0 || items.type == "BUS" && index < list[0].stepList.length - 1) {
        
        const departureMarker = new naver.maps.Marker({
          map,
          position: new naver.maps.LatLng(items.departure.latitude, items.departure.longitude),
          icon: {
            url: BusMark,
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
          }
        })

        var infowindow = new naver.maps.InfoWindow({
          content: [`<p style="position: relative; top: 95px; left: -8px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> ${items.departure.name} </p>`].join(''),
          borderWidth: 0,
          backgroundColor: "transparent",
          disableAnchor: true
        });

        naver.maps.Event.addListener(departureMarker, "click", function (e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, departureMarker); }
        });
        
        const arrivalMarker = new naver.maps.Marker({
          map,
          position: new naver.maps.LatLng(items.arrival.latitude, items.arrival.longitude),
          icon: {
            url: BusMark,
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
          }
        })

        var infowindow = new naver.maps.InfoWindow({
          content: [`<p style="position: relative; top: 95px; left: -8px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> ${items.arrival.name} </p>`].join(''),
          borderWidth: 0,
          backgroundColor: "transparent",
          disableAnchor: true
        });

        naver.maps.Event.addListener(arrivalMarker, "click", function (e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, arrivalMarker); }
        });
      }
    })}
  });
  
  // console.log(list);

  return (
    <div>
      <div id="map" style={{ width:'100%', height:'80vh' }}></div>
    </div>
  );
};
 
export default Map;