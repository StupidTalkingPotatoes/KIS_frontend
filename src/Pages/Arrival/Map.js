import React, { useEffect, useState } from 'react';
import Mark from '../../Images/mark.png';
 
const Map = ({id}) => {
  const { naver } = window;
  const [list, setList] = useState({ nodeDto: { latitude: 36.139, longitude: 128.396 } });

  useEffect(()=> {
    // if (list.nodeDto.latitude == undefined) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    
      fetch(`http://119.56.230.204:506/api/nodes/arrive-info?id=${id}`, requestOptions)
      .then(response => response.json())
      .then(result => setList(result))
      .catch(error => console.log('error :: ', error))
    // }  
  }, [])

  useEffect(() => {
    const location = new naver.maps.LatLng(list.nodeDto.latitude, list.nodeDto.longitude); // 지도에 표시할 위치의 위도와 경도 설정
    const map = new naver.maps.Map('map', {
      center: location, 
      zoom: 18, 
    });

    const marker = new naver.maps.Marker({
      map,
      position: location,
      icon: {
        url: Mark,
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
      }
    })

    var infowindow = new naver.maps.InfoWindow({
      content: [`<p style="position: relative; top: 60px; left: -10px; color: #53B332; font-size: 12px; text-align:center; background-color: white; font-weight: 900; padding: 5px 10px; border-radius: 5px; border: 3px solid #53B332"> ${list.nodeDto.name} </p>`].join(''),
      borderWidth: 0,
      backgroundColor: "transparent",
      disableAnchor: true
    });

    infowindow.open(map, marker);
  });
  
  // console.log(list);
  // console.log(id);

  return (
    <div>
      <div id="map" style={{ width:'100%', height:'70vh' }}></div>
    </div>
  );
};
 
export default Map;