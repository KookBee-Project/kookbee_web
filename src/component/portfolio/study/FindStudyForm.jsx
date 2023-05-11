import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPage } from "../../../store/portfolio/study/pageSlice";

const FindStudyForm = () => {
  const { data, totalPages } = useSelector((state) => state.page);
  const [buttons, setButtons] = useState([]);
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getPage(0));
    }
  }, []);

  useEffect(() => {
    const tmp = [];
    for (let i = 1; i <= totalPages; i++) tmp.push(i);
    setButtons(tmp);
  }, [totalPages]);

  const onClick = (el) => {
    setPage(Number(el) - 1);
    dispatch(getPage(Number(el) - 1));
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl justify-center">전체 스터디</b>
          <div className="border-4 border-sky-400 rounded-3xl bg-sky-400 flex justify-end">
            <Link to={"/portfolio/study/register"}>스터디 등록</Link>
          </div>
          <table className="table items-center h-5/6 w-11/12 min-h-40 border-4 border-yellow-300 rounded-3xl">
            <thead className="border-b-2">
              <th>스터디명</th>
              <th>목적</th>
              <th>개설일</th>
              <th>팀장</th>
            </thead>
            <tbody>
              {data.slice(page * 10 + 0, page * 10 + 10)?.map((el) => (
                <tr>
                  <td>
                    <Link
                      to={`/portfolio/study/studydetail/${el.groupStudyId}`}
                    >
                      {el.groupStudyName}
                    </Link>
                  </td>
                  <td>{el.groupStudyPurpose}</td>
                  <td>{el.groupStudyOpenDate}</td>
                  <td>{el.groupStudyLeaderName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex mt-5">
            <Link>
              <AiOutlineArrowLeft className="mt-1 mr-1" />
            </Link>
            {buttons.map((el) => (
              <button
                className="ml-1 mr-1"
                id="pageValue"
                name="pageValue"
                value={el - 1}
                onClick={(e) => onClick(el)}
              >
                {el}
              </button>
            ))}
            <Link>
              <AiOutlineArrowRight className="mt-1 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindStudyForm;
