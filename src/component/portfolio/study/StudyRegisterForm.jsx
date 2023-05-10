import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { findUser, getMe } from "../../../store/user/userSlice";
import {
  inviteMember,
  studyRegister,
} from "../../../store/portfolio/study/studySlice";

const StudyRegisterForm = () => {
  const { status, error } = useSelector((state) => state.study);
  const { userInfo, status1, error1, userId, userName } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [groupStudy, setGroupStudy] = useState({
    groupStudyName: "",
    groupStudyPurpose: "",
    userIdList: [],
  });

  const [userEmail, setUserEmail] = useState("");

  const [user, setUser] = useState([]);

  // 등록자 정보 저장
  useEffect(() => {
    setUser([...user, { userId: userId }]);
  }, []);

  // 스터디의 이름과 목적을 저장
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setGroupStudy({ ...groupStudy, [name]: value });
  };

  // 유저의 이메일을 입력하여 유저의 정보 회신
  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const onSubmitUserEmail = (e) => {
    e.preventDefault();
    dispatch(findUser(userEmail));
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmitUserEmail(e);
    }
  };

  // 유저의 정보 중복 체크
  useEffect(() => {
    if (status1 === "successed") {
      if (user.length !== 0) {
        if (check()) {
          addData();
        } else alert("이미 등록된 유저입니다.");
      } else {
        addData();
      }
    } else if (status1 === "failed") {
      alert(error1);
    }
  }, [status1]);

  // 중복을 체크하는 기능
  const check = () => {
    let flag = true;
    user.map((el) => {
      if (el.userId === userInfo.userId) flag = false;
    });
    return flag;
  };

  // 중복이 아닐 경우 저장하는 기능
  const addData = () => {
    setUser([
      ...user,
      { userName: userInfo.userName, userId: userInfo.userId },
    ]);
  };

  // 스터디 등록
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      studyRegister({
        ...groupStudy,
        userIdList: [...user].map((el) => el.userId),
      })
    );
    if (status === "successed") {
      navigate("/portfolio/study");
    } else if (status === "failed") {
      alert(error);
    }
  };

  return (
    <div>
      <div className="table items-center h-5/6 w-11/12 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-5/6 mt-10 ml-3 mr-3">
          <b className="text-3xl">스터디 등록</b>
          <form onSubmit={onSubmit}>
            <div className="w-96">
              <div className="mt-4 mb-4">
                <label for="groupStudyName">스터디명</label>
                <input
                  type="text"
                  id="groupStudyName"
                  name="groupStudyName"
                  onChange={onChangeHandler}
                  className="bg-gray-200 flex w-full mt-2"
                ></input>
              </div>
              <div className="mt-2 mb-2">
                <label for="groupStudyPurpose">목표</label>
                <input
                  type="text"
                  id="groupStudyPurpose"
                  name="groupStudyPurpose"
                  className="bg-gray-200 flex w-full h-28 mt-2"
                  onChange={onChangeHandler}
                ></input>
              </div>
              <div className="mt-2">
                <t className="flex">팀장</t>
                <b>{userName}</b>
                <p>팀원</p>
                {user?.map((el) => (
                  <b className="mr-2">{el.userName}</b>
                ))}
              </div>
            </div>
            <div className="w-96 mt-2 mb-10">
              <form onKeyDown={handleKeyPress}>
                <input
                  type="text"
                  id="userEmail"
                  name="userEmail"
                  onChange={onChangeUserEmail}
                  className="bg-gray-200 mt-1 text-b w-full"
                  placeholder="초대할 팀원의 이메일을 입력하세요."
                ></input>
              </form>
            </div>
            <button
              type="submit"
              className="border-8 border-sky-400 rounded-3xl bg-sky-400 flex justify-center"
            >
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StudyRegisterForm;
