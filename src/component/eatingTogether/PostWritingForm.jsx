import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCampusInfo,
  getRestaurant,
  participate,
  postWrite,
} from "../../store/eatingTogether/EatingTogetherSlice";
import { useEffect, useState } from "react";

const { kakao } = window;

const PostWritingForm = () => {
  const param = useParams();
  const navigate = useNavigate();

  const { selectData } = useSelector((state) => state.bootcampName);

  const { restaurantList, campusInfo } = useSelector(
    (state) => state.eatingTogether
  );

  const [request, setRequest] = useState({
    bootcampId: param.bootcampId,
    postTitle: "",
    postContents: "",
    appointmentDate: "",
    personnel: 0,
    restaurantInfoId: "",
    restaurantName: "",
  });

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

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            restaurantList[i].restaurantName +
            "</div>"
        );

        infowindow.open(map, marker);

        setRequest({
          ...request,
          restaurantName: restaurantList[i].restaurantName,
          restaurantInfoId: restaurantList[i].id,
        });
      });
    }

    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  }, [restaurantList]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(participate(request));
    dispatch(postWrite(request));
    navigate(`/bootcamp/eatingtogether/${selectData}`);
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <form onSubmit={onSubmit}>
            <b className="text-3xl mb-5 flex justify-center">글쓰기</b>
            <div id="map" style={{ width: "500px", height: "500px" }}></div>
            <div className="flex-col">
              <div className=" justify-center w-full mt-2">
                <b className="justify-center">제목</b>
                <input
                  id="postTitle"
                  name="postTitle"
                  type="text"
                  className="bg-gray-200 flex w-52"
                  placeholder="제목을 입력하세요."
                  onChange={onChange}
                ></input>
              </div>
              <div className="">
                <div className="">
                  <b className="">식당명</b>
                  <t className="bg-gray-200 flex w-52">
                    {request.restaurantName}
                  </t>
                </div>
              </div>
              <div className="">
                <div className="">
                  <b>인원</b>
                  <input
                    id="personnel"
                    name="personnel"
                    type="number"
                    onChange={onChange}
                    className="bg-gray-200 flex w-52"
                  ></input>
                </div>
                <b>일자</b>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  className="bg-gray-200 flex w-52"
                  onChange={onChange}
                ></input>
              </div>
              <div className="">
                <b>내용</b>
                <input
                  id="postContents"
                  name="postContents"
                  type="text"
                  placeholder="내용을 입력하세요."
                  className="bg-gray-200 flex w-full h-20"
                  onChange={onChange}
                ></input>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center m-5"
              >
                등록하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PostWritingForm;
