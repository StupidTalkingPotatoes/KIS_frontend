/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import Mark from '../../Images/mark.png';
import Bus from '../../Images/bus_location.png';
 
const Map = ({routeId}) => {
  const { naver } = window;
  const [list, setList] = useState({ nodeDto: { latitude: 36.139, longitude: 128.396 } });

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch(`http://119.56.230.204:506/api/routes/location?routeId=${routeId}`, requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [])

  useEffect(() => {
    const location = new naver.maps.LatLng(36.13948, 128.39673); 
    const map = new naver.maps.Map('map', {
      center: location,
      zoom: 14,
    });
  
    {list.passingNodeList && list.passingNodeList.map((item) => {
      const marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(item.latitude, item.longitude),
        icon: {
          url: Mark,
          size: new naver.maps.Size(50, 52),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(25, 26)
        }
      })
    })}
  
    {list.realtimeNodeOrderList && list.realtimeNodeOrderList.map((item) => {
      {list.passingNodeList && list.passingNodeList.map((items) => {
        if (items.order == item) {
          const busMarker = new naver.maps.Marker({
            map,
            position: new naver.maps.LatLng(items.latitude, items.longitude),
            icon: {
              url: Bus,
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(25, 26)
            }
          })
        }
      })}
    })}
  });
  
  console.log(list);
  // console.log(routeId);

  return (
    <div>
      <div id="map" style={{ width:'100%', height:'65vh' }}></div>
    </div>
  );
};
 
export default Map;