import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRestaurant } from "../../store/eatingTogether/EatingTogetherSlice";
import { Navigate, useNavigate } from "react-router-dom";

const { kakao } = window;

const PostRestaurantForm = () => {
  const { selectData } = useSelector((state) => state.bootcampName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [request, setRequest] = useState({
    restaurantName: "",
    restaurantPositionLa: 0,
    restaurantPositionMa: 0,
  });

  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 표시할 HTML 엘리먼트 선택

    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도의 중심 좌표
      level: 5, // 지도의 확대 레벨
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(searchWord, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );

        infowindow.open(map, marker);

        setRequest({
          ...request,
          restaurantName: searchWord,
          restaurantPositionLa: marker.getPosition().getLat(),
          restaurantPositionMa: marker.getPosition().getLng(),
        });
      });
    }
  }, [searchWord]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postRestaurant(request));
    navigate(`/bootcamp/eatingtogether/getrestaurant/${selectData}`);
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl mb-5">맛집 등록하기</b>
          <div id="map" style={{ width: "500px", height: "500px" }}></div>
          <div className="flex m-10">
            <input
              type="text"
              placeholder="검색어를 입력해 주세요."
              className="mt-2 border-4"
              id="restaurantName"
              name="restaurantName"
              onChange={(e) => setSearchWord(e.target.value)}
            ></input>
            <div className="bg-yellow-300 rounded-lg w-1/4 ml-5">
              <form onSubmit={onSubmit}>
                <button>등록하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRestaurantForm;
