import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCampusInfo,
  getRestaurant,
} from "../../store/eatingTogether/EatingTogetherSlice";
import { Link, useParams } from "react-router-dom";

const { kakao } = window;

const GetRestaurantForm = () => {
  const param = useParams();
  const { restaurantList, campusInfo } = useSelector(
    (state) => state.eatingTogether
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // 저장된 맛집 지도에 표시하기
    dispatch(getRestaurant());
    dispatch(getCampusInfo(param.bootcampId));
  }, []);

  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 표시할 HTML 엘리먼트 선택

    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도의 중심 좌표
      level: 5, // 지도의 확대 레벨
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new window.kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch(campusInfo.campusAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;color:red;text-align:center;padding:6px 0;">${campusInfo.campusName}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
    // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    for (let i = 0; i < restaurantList.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        // position: positions[i].latlng, // 마커를 표시할 위치
        position: new kakao.maps.LatLng(
          restaurantList[i].restaurantPositionLa,
          restaurantList[i].restaurantPositionMa
        ),
        title: restaurantList[i].restaurantName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, [restaurantList]);

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl mb-5">주변 맛집보기</b>
          <div id="map" style={{ width: "500px", height: "500px" }}></div>
          <div className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center m-5">
            <Link to={"/bootcamp/eatingtogether/postrestaurant"}>
              맛집 추가하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetRestaurantForm;
