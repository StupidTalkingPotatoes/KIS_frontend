import React, { useEffect, useState } from 'react';
import Mark from '../../Images/mark.png';
import Current from '../../Images/current.png';

function getCurrentPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  });
}

const Map = () => {
  const { naver } = window;
  const [list, setList] = useState([]);
  const [point, setPoint] = useState({ coords: { latitude: 36.14567, longitude: 128.39261 } });

  useEffect(() => {
    getCurrentPosition()
    .then(point => setPoint(point))
  }, [])

  useEffect(() => {
    const current = new naver.maps.LatLng(point.coords.latitude, point.coords.longitude); 
    const map = new naver.maps.Map('map', {
      center: current, // 중앙에 배치할 위치
      zoom: 16, // 확대 단계
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
    {list && list.map((item) => {
      const marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(item.latitude, item.longitude),
        icon: {
          url: Mark,
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(25, 26)
        }
      })
    })}
  });

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch(`http://119.56.230.204:506/api/nodes?latitude=${point.coords.latitude}&longitude=${point.coords.longitude}`, requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [point])

  // console.log(point);
  // console.log(list);

  return (
    <div>
      <div id="map" style={{ width: '100vw', height: '57vh' }}></div>
    </div>
  );
};
 
export default Map;