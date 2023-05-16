import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCampusInfo,
  getRestaurant,
  participate,
} from "../../store/eatingTogether/EatingTogetherSlice";

const { kakao } = window;

const EatingTogetherPostDetailForm = () => {
  const { campusInfo, postList, status, errorMessage, participateStatus } =
    useSelector((state) => state.eatingTogether);
  const { selectData } = useSelector((state) => state.bootcampName);

  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  const [request, setRequest] = useState({
    eatingTogetherId: param.eatingTogetherId,
  });

  useEffect(() => {
    dispatch(getCampusInfo(selectData));
  }, []);

  console.log(selectData);

  console.log(campusInfo, param);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(
      participate({
        eatingTogetherId: param.eatingTogetherId,
      })
    );
    if (participateStatus === "successed") {
      navigate(`/bootcamp/eatingtogether/${selectData}`);
    } else if (participateStatus === "failed") {
      alert(errorMessage);
    }
  };

  useEffect(() => {
    const post = postList.find((el) => el.id == param.eatingTogetherId);
    console.log(post);
    const container = document.getElementById("map"); // 지도를 표시할 HTML 엘리먼트 선택

    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도의 중심 좌표
      level: 5, // 지도의 확대 레벨
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new window.kakao.maps.services.Geocoder();
    if (!campusInfo.campusAddress) return;
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

    // // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // for (let i = 0; i < postList.map((el => el.id === Number(el.eatingTogetherId) && el)).length; i++) {
    //   // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      // position: positions[i].latlng, // 마커를 표시할 위치
      position: new kakao.maps.LatLng(
        post.restaurantPositionLa,
        post.restaurantPositionMa
      ),
      title: post.restaurantName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });
    // }
  }, [postList, campusInfo, param]);

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          {postList?.map(
            (el) =>
              el.id === Number(param.eatingTogetherId) && (
                <>
                  <b className="text-3xl mb-5 flex justify-center">
                    <t>{el.postTitle}</t>
                  </b>
                  <div className="flex justify-center">
                    <div className="mr-10">
                      <b className="mr-3">작성자</b>
                      <t>{el.userName}</t>
                    </div>
                    <div>
                      <div>
                        <b className="mr-3">식당명</b>
                        <t>{el.restaurantName}</t>
                      </div>
                    </div>
                  </div>
                  <div
                    id="map"
                    style={{ width: "500px", height: "500px" }}
                  ></div>
                  <div className="flex justify-center">
                    <div>
                      <div className="m-5">
                        <b className="mr-3">인원</b>
                        <t className="mr-16">
                          {el.currentPersonnel}/{el.personnel}
                        </t>
                        <b className="mr-3">일자</b>
                        <t>{el.appointmentDate}</t>
                      </div>
                    </div>
                  </div>
                  <div>
                    <b className="mr-3">내용</b>
                    <t>{el.postContents}</t>
                  </div>
                </>
              )
          )}
          <div className="flex justify-center">
            <button
              onClick={onClick}
              className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center m-5"
            >
              참여하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EatingTogetherPostDetailForm;
