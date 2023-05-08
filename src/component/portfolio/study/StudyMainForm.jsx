import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getPage } from "../../../store/portfolio/study/studySlice";

const StudyMainForm = () => {
  const { data, status, totalPages } = useSelector((state) => state.study);
  const [buttons, setButtons] = useState([]);
  const dispatch = useDispatch();

  const [page, setPage] = useState();

  useEffect(() => {
    dispatch(getPage(0));
  }, []);

  useEffect(() => {
    const tmp = [];
    for (let i = 1; i <= totalPages; i++) tmp.push(i);
    setButtons(tmp);
  }, [totalPages]);

  const onClick = (e, el) => {
    setPage(Number(el) - 1);
    dispatch(getPage(Number(page)));
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl justify-center">나의 스터디</b>
          <table className="table items-center h-5/6 w-11/12 min-h-40 border-4 border-yellow-300 rounded-3xl">
            <thead className="border-b-2">
              <th>스터디명</th>
              <th>목적</th>
              <th>개설일</th>
              <th>팀장</th>
            </thead>
            <tbody>
              {data?.map((el) => (
                <tr>
                  <td>
                    <Link>{el.groupStudyName}</Link>
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
export default StudyMainForm;
