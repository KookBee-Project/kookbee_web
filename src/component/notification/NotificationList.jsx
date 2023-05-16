import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNotificationList } from "../../store/notification/notificationSlice";
import { useEffect } from "react";
import Loading from "../../loading/Loading";

const NotificationList = () => {
  // 부트캠프Id로 물품목록 불러오기
  // 이건 임시데이터
  const { selectData } = useSelector((state) => state.bootcampName);
  const { data, status, error } = useSelector((state) => state.notification);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    selectData != undefined && dispatch(getNotificationList(selectData));
  }, [selectData]);

  return (
    <div className="table items-center w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      {status === "loading" && <Loading></Loading>}
      {status === "successed" && (
        <div className="flex flex-col items-center w-full h-5/6 mt-10">
          <div className="text-center font-bold text-3xl">공지사항</div>
          <ul role="list" className="divide-y divide-gray-100">
            {data.map((el) => (
              <li key={el.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <Link to={`/notification/${selectData}/${el.id}`}>
                      <p className="text-m  font-bold leading-6 text-gray-900">
                        {el.postTitle}
                      </p>
                    </Link>
                    <br />
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {/* 이부분은 백에서 전달할때 response 에서 짜르는걸로... */}
                      {el.postContent}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    작성자: {el.writerName}
                    <br />
                    작성일: {el.postCreateAt}
                    <br />
                    조회수: {el.viewCount}
                    <br />
                    댓글수: {el.commentCount}
                  </p>
                </div>
                <img
                  className="h-24 w-20 flex-none bg-gray-50"
                  src={
                    "https://storage.googleapis.com/kookbee-test-strorage/" +
                    el.fileUUID
                  }
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationList;
