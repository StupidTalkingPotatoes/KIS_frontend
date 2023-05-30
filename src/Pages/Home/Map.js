import React, { useEffect, useState } from 'react';
import Mark from '../../Images/mark.png';
import Current from '../../Images/current.png';

const Map = () => {
  const { naver } = window;
  const [list, setList] = useState([]);

  useEffect(() => {
    const current = new naver.maps.LatLng(36.14567, 128.39261); 
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
  
    fetch("http://119.56.230.204:506/api/nodes?latitude=36.14567&longitude=128.39261", requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [])

  // console.log(list);

  return (
    <div>
      <div id="map" style={{ width: '100vw', height: '57vh' }}></div>
    </div>
  );
};
 
export default Map;