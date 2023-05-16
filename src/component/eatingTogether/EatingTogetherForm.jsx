import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../store/eatingTogether/EatingTogetherSlice";

const EatingTogetherForm = () => {
  const { selectData } = useSelector((state) => state.bootcampName);
  const { postList } = useSelector((state) => state.eatingTogether);

  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(getPost(param.bootcampId));
  }, []);

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <div className="m-5">
            <b className="text-3xl">나랑 같이 밥 먹을래 ?</b>
          </div>
          <div>
            <table className="border-4">
              <thead>
                <th>작성자</th>
                <th>식당명</th>
                <th>제목</th>
                <th>예정일</th>
                <th>인원</th>
              </thead>
              {postList?.map((el) => (
                <tbody>
                  <tr>
                    <td className="p-1 pl-3 pr-3">{el.userName}</td>
                    <td className="p-1 pl-3 pr-3">{el.restaurantName}</td>
                    <td className="p-1 pl-3 pr-3">
                      <Link to={`/bootcamp/eatingtogether/postdetail/${el.id}`}>
                        {el.postTitle}
                      </Link>
                    </td>
                    <td className="p-1 pl-3 pr-3">{el.appointmentDate}</td>
                    <td className="p-1 pl-3 pr-3">
                      {el.currentPersonnel} / {el.personnel}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="flex">
            <div className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center m-5">
              <Link to={`/bootcamp/eatingtogether/getrestaurant/${selectData}`}>
                주변 맛집 보기
              </Link>
            </div>
            <div className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center m-5">
              <Link to={`/bootcamp/eatingtogether/postwriting/${selectData}`}>
                글쓰기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EatingTogetherForm;
