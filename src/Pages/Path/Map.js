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
      let marker = new naver.maps.Marker({});
      
      if (index == 0) { // 출발지
        if (items.type == "BUS") { // 버스
          marker = new naver.maps.Marker({
            map,
            position: new naver.maps.LatLng(departureLatitude, departureLongitude),
            icon: { url: BigBusMark, origin: new naver.maps.Point(0, 0), anchor: new naver.maps.Point(25, 26) }
          })

          var infowindow = new naver.maps.InfoWindow({
            content: [`<p style="position: relative; top: 95px; left: -8px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> 출발 </p>`].join(''),
            borderWidth: 0,
            backgroundColor: "transparent",
            disableAnchor: true
          });
        } else { // 도보
          marker = new naver.maps.Marker({
            map,
            position: new naver.maps.LatLng(departureLatitude, departureLongitude),
            icon: { url: BigWalkingMark, origin: new naver.maps.Point(0, 0), anchor: new naver.maps.Point(25, 26) }
          })

          var infowindow = new naver.maps.InfoWindow({
            content: [`<p style="position: relative; top: 95px; left: -8px; color: #6a6a6a; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #6a6a6a"> 출발 </p>`].join(''),
            borderWidth: 0,
            backgroundColor: "transparent",
            disableAnchor: true
          });
        }

        naver.maps.Event.addListener(marker, "click", function(e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, marker); }
        });
      } else if (index == list[0].stepList.length - 1) { // 도착지
        if (items.type == "BUS") { // 버스
          marker = new naver.maps.Marker({
            map,
            position: new naver.maps.LatLng(destinationLatitude, destinationLongitude),
            icon: { url: BigBusMark, origin: new naver.maps.Point(0, 0), anchor: new naver.maps.Point(25, 26) }
          })

          var infowindow = new naver.maps.InfoWindow({
            content: [`<p style="position: relative; top: 95px; left: -8px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> 도착 </p>`].join(''),
            borderWidth: 0,
            backgroundColor: "transparent",
            disableAnchor: true
          });
        } else { // 도보
          marker = new naver.maps.Marker({
            map,
            position: new naver.maps.LatLng(destinationLatitude, destinationLongitude),
            icon: { url: BigWalkingMark, origin: new naver.maps.Point(0, 0), anchor: new naver.maps.Point(25, 26) }
          })

          var infowindow = new naver.maps.InfoWindow({
            content: [`<p style="position: relative; top: 95px; left: -8px; color: #6a6a6a; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #6a6a6a"> 도착 </p>`].join(''),
            borderWidth: 0,
            backgroundColor: "transparent",
            disableAnchor: true
          });
        }

        naver.maps.Event.addListener(marker, "click", function(e) {
          if (infowindow.getMap()) { infowindow.close(); }
          else { infowindow.open(map, marker); }
        });
      } else { 
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

        var infowindow2 = new naver.maps.InfoWindow({
          content: [`<p style="position: relative; top: 95px; left: -8px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> ${items.arrival.name} </p>`].join(''),
          borderWidth: 0,
          backgroundColor: "transparent",
          disableAnchor: true
        });

        naver.maps.Event.addListener(arrivalMarker, "click", function (e) {
          if (infowindow2.getMap()) { infowindow2.close(); }
          else { infowindow2.open(map, arrivalMarker); }
        });
      }
    })}
  });

  return (
    <div>
      <div id="map" style={{ width:'100%', height:'80vh' }}></div>
    </div>
  );
};
 
export default Map;