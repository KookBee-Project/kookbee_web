import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../api/api";

const DashBoard = () => {
  const [remainDay, setRemainDay] = useState(0);
  const [homeworkList, setHomeworkList] = useState([]);
  const [qnaList, setqnaList] = useState([]);
  const [studyList, setStudyList] = useState([]);
  const [skillsetList, setskillsetList] = useState([]);
  const userInfo = useSelector((state) => state.user.data);

  useEffect(() => {
    findRemainDay();
    getHomeworkList();
    getQnAList();
    getStudyList();
    getSkillsetList();
  }, []);

  const findRemainDay = async () => {
    const response = await api("GET", "/class/my/remainday");
    setRemainDay(response.data);
  };

  const getHomeworkList = async () => {
    const response = await api("GET", "/class/my/homework");
    setHomeworkList(response.data);
  };

  const getQnAList = async () => {
    const response = await api("GET", "/class/my/qna");
    setqnaList(response.data);
  };

  const getStudyList = async () => {
    const response = await api("GET", "/portfolio/my/study");
    setStudyList(response.data);
  };

  const getSkillsetList = async () => {
    const response = await api("GET", "/class/my/skillset");
    setskillsetList(response.data);
  };

  console.log(skillsetList);

  return (
    <div className="mx-10 my-20">
      <div className="font-semibold text-lg">
        {remainDay == 0 ? (
          <p>
            '{userInfo.userName}님' 현재 수강중인 부트캠프가 없습니다.
            <br />
            <Link to="/bootcamp" className="hover:text-yellow-400">
              신청하러 가시겠어요? @ _ @
            </Link>
          </p>
        ) : (
          <p>
            '{userInfo.userName}님' 현재 수강중인 부트캠프 수료까지 {remainDay}
            일 남았습니다! <br />
            포기하지 말고 끝까지 달려봅시다~~!! ^~^
          </p>
        )}
      </div>

      <div className="flex mb-10">{skillsetList.map(el =>
        <div className="flex flex-col font-semibold bg-yellow-200 rounded-full w-16 h-16 
        justify-center items-center ml-3 shadow-lg hover:bg-yellow-400">{el}</div>
      )}</div>

      <div>
        <p className="mt-3 ml-3 font-bold text-lg">최근 올라온 과제 목록</p>
        {homeworkList.length !== 0 ? (
          <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    커리큘럼명
                  </th>
                  <th scope="col" class="px-6 py-3">
                    과제명
                  </th>
                  <th scope="col" class="px-6 py-3">
                    스킬셋
                  </th>
                  <th scope="col" class="px-6 py-3">
                    마감일
                  </th>
                  <th scope="col" class="px-6 py-3">
                    상태
                  </th>
                </tr>
              </thead>
              <tbody>
                {homeworkList?.map((el, idx) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">{idx + 1}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {el.homeworkCurriculumName}
                    </th>
                    <td class="px-6 py-4">{el.homeworkQuestionTitle}</td>
                    <td class="px-6 py-4">{el.skillSet}</td>
                    <td class="px-6 py-4">{el.homeworkQuestionEndDate}</td>
                    <td class="px-6 py-4">
                      <Link
                        to=""
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {el.homeworkStatus}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              to={"/portfolio/study"}
              className="flex font-semibold justify-center mt-3"
            >
              더보기
            </Link>
          </div>
        ) : (
          <t className="ml-3 font-extrabold">-진행중인 과제가 없습니다.</t>
        )}
      </div>

      <div>
        <p className="mt-3 ml-3 font-bold text-lg">내가 등록한 QnA 목록</p>
        {qnaList.length !== 0 ? (
          <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    부트캠프명
                  </th>
                  <th scope="col" class="px-6 py-3">
                    제목
                  </th>
                  <th scope="col" class="px-6 py-3">
                    작성일
                  </th>
                  <th scope="col" class="px-6 py-3">
                    답변여부
                  </th>
                </tr>
              </thead>
              <tbody>
                {qnaList?.map((el, idx) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">{idx + 1}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {el.bootcampTitle}
                    </th>
                    <td class="px-6 py-4">{el.postTitle}</td>
                    <td class="px-6 py-4">{el.postCreateAt}</td>
                    <td class="px-6 py-4">
                      <Link
                        to=""
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {el.isAnswer}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              to={"/portfolio/study"}
              className="flex font-semibold justify-center mt-3"
            >
              더보기
            </Link>
          </div>
        ) : (
          <t className="ml-3 font-extrabold">-등록한 QnA가 없습니다.</t>
        )}
      </div>

      <div>
        <p className="mt-3 ml-3 font-bold text-lg">내가 작성한 스터디 게시글</p>
        {studyList.length !== 0 ? (
          <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    스터디명
                  </th>
                  <th scope="col" class="px-6 py-3">
                    회차
                  </th>
                  <th scope="col" class="px-6 py-3">
                    회차명
                  </th>
                  <th scope="col" class="px-6 py-3">
                    제목
                  </th>
                  <th scope="col" class="px-6 py-3">
                    작성일
                  </th>
                </tr>
              </thead>
              <tbody>
                {studyList?.map((el, idx) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">{idx + 1}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {el.groupStudyName}
                    </th>
                    <td class="px-6 py-4">{el.groupStudyLectureIteration}</td>
                    <td class="px-6 py-4">{el.groupStudyLectureTitle}</td>
                    <td class="px-6 py-4">
                      <Link
                        to={`/portfolio/study/${el.groupStudyId}/lecture/${el.groupStudyLectureId}/post/${el.groupStudyPostId}`}
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {el.groupStudyPostTitle}
                      </Link>
                    </td>
                    <td class="px-6 py-4">{el.groupStudyPostCreateAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              to={"/portfolio/study"}
              className="flex font-semibold justify-center mt-3"
            >
              더보기
            </Link>
          </div>
        ) : (
          <t className="ml-3 font-extrabold">-가입된 스터디가 없습니다.</t>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
