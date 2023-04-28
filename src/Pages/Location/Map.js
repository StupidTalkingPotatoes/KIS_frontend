const { kakao } = window;

function Map() {
  const container = document.getElementById('myMap');
  const options = {
    center: new kakao.maps.LatLng(36.1425, 128.3945),
    level: 5
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

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition, 
    // image: markerImage // 마커이미지 설정 
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}

export default Map;