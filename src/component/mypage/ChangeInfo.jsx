import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { studentSignUp } from "../../store/student/studentSignUpSlice";

const ChangeInfo = () => {
  const [users, setUsers] = useState({
    userId: "",
    userEmail: "",
    userName: "",
    userBirth: "",
    userPhoneNumber: "",
  });

  const [putRequest, setPutRequest] = useState({
    userId: "",
    userPw: "",
    userPhoneNumber: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    findMyInfo();
  }, []);

  useEffect(() => {
    setPutRequest({
      userId: users.userId,
      userPhoneNumber: users.userPhoneNumber,
    });
  }, [users]);

  const findMyInfo = async () => {
    const response = await api("GET", "/user");
    setUsers(response.data);
  };

  const putUserInfo = async (putRequest) => {
    const response = await api("PUT", "/user/my", putRequest);
    console.log(response.status);
    setUsers(response.data);
    if (response.status === 200) {
      navigate("/my");
    }
  };

  // 오류메세지 상태 저장
  const [userPwMessage, setUserPwMessage] = useState("");
  const [userPwConfirmMessage, setUserPwConfirmMessage] = useState("");
  const [userPhoneNumberMessage, setUserPhoneNumberMessage] = useState("");
  const [userPwConfirm, setUserPwConfirm] = useState("");

  // 비밀번호 재확인
  const pwCheck = (e) => {
    setUserPwConfirm(e.target.value);
    // 비동기라 순서가 늦게 진행될 때, userPwConfirm을 입력하고 있을 때 즉시 비교하여 작용한다.
    if (putRequest.userPw === e.target.value) {
      // 입력되는 value값을 즉시 호출한다.
      setUserPwConfirmMessage("");
    } else {
      setUserPwConfirmMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPutRequest({ ...putRequest, [name]: value });
    console.log(putRequest);

    // 비밀번호 검사
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(putRequest.userPw)) {
      setUserPwMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
    } else {
      setUserPwMessage("");
    }

    // 연락처 양식 확인
    if (name === "userPhoneNumber") {
      const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
      if (!phoneRegExp.test(value)) {
        setUserPhoneNumberMessage("올바른 형식이 아닙니다!");
      } else {
        setUserPhoneNumberMessage("");
      }
    }
  };

  const onSubmit = (e) => {
    if (putRequest.userPw) {
      e.preventDefault();
      console.log(putRequest);
      putUserInfo(putRequest);
    } else {
      e.preventDefault();
      alert("비밀번호를 입력해주세요.");
    }
  };

  return (
    <>
      <div class="bg-grey-lighter min-h-screen min-w-30 flex flex-col mt-20">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-11/12 border border-yellow-200">
          <h1 class="mb-8 text-3xl text-center">개인정보수정</h1>
          <form method="POST" onSubmit={onSubmit}>
            <h2>이메일</h2>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
              name="userEmail"
              value={users.userEmail}
            />
            <h2>비밀번호</h2>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
              name="userPw"
              value={putRequest.userPw}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Password"
            />
            <p className="message"> {userPwMessage} </p>
            <h2>비밀번호 재확인</h2>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
              name="userPwConfirm"
              value={userPwConfirm}
              onChange={(e) => pwCheck(e)}
              placeholder="Confirm Password"
            />
            <p className="message"> {userPwConfirmMessage} </p>
            <h2>이름</h2>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
              name="userName"
              value={users.userName}
            />
            <h2>생년월일</h2>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
              name="userBirth"
              value={users.userBirth}
            />
            <h2>연락처</h2>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
              name="userPhoneNumber"
              value={putRequest.userPhoneNumber}
              onChange={(e) => onChangeHandler(e)}
              placeholder="010-1234-5678"
            />
            <p className="message"> {userPhoneNumberMessage} </p>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                class="w-2/5 text-center py-3 rounded-lg text-black bg-yellow-200 focus:outline-none my-1"
              >
                수정하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangeInfo;
