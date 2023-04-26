const { kakao } = window;

function Map() {
  const container = document.getElementById('myMap');
  const options = {
    center: new kakao.maps.LatLng(36.14123, 128.39590),
    level: 3
  };

  // 지도를 생성합니다
  const map = new kakao.maps.Map(container, options);
  
  // var imageSrc = "../../Images/white.png"; // 마커이미지의 주소입니다    
  // var imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
  // var imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        
  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

  // 마커가 표시될 위치입니다
  var markerPosition  = new kakao.maps.LatLng(36.14256247287736, 128.39459855613836); 
  var markerPosition2  = new kakao.maps.LatLng(36.13949615267772, 128.39674396438699); 
  var markerPosition3  = new kakao.maps.LatLng(36.139311817617845, 128.39709620049); 

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition, 
    // image: markerImage // 마커이미지 설정 
  });

  var marker2 = new kakao.maps.Marker({
    position: markerPosition2, 
    // image: markerImage // 마커이미지 설정 
    });
  
  var marker3 = new kakao.maps.Marker({
    position: markerPosition3, 
    // image: markerImage // 마커이미지 설정 
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
  marker2.setMap(map);
  marker3.setMap(map);
}

export default Map;