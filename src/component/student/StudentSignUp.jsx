import { useState } from "react";
import { useDispatch } from "react-redux";
import { studentSignUp } from "../../store/student/studentSignUpSlice";

const StudentSignUp = () => {
  // 초기값 세팅
  const [users, setUsers] = useState({
    userEmail: "",
    userPw: "",
    userName: "",
    userBirth: "",
    userPhoneNumber: "",
    userType: "STUDENT",
    userStatus: "AVAILABLE",
  });

  // 오류메세지 상태 저장
  const [userEmailMessage, setUserEmailMessage] = useState("");
  const [userPwMessage, setUserPwMessage] = useState("");
  const [userPwConfirmMessage, setUserPwConfirmMessage] = useState("");
  const [userNameMessage, setUserNameMessage] = useState("");
  const [userBirthMessage, setUserBirthMessage] = useState("");
  const [userPhoneNumberMessage, setUserPhoneNumberMessage] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });

    // // 이메일 검사
    // const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    // if (!emailRegExp.test(value)) {
    //   setUserEmailMessage("이메일의 형식이 올바르지 않습니다!");
    // } else {
    //   setUserEmailMessage("");
    // }

    // // 비밀번호 검사
    // const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // if (!passwordRegExp.test(users.userPw)) {
    //   setUserPwMessage(
    //     "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
    //   );
    // } else {
    //   setUserPwMessage("");
    // }

    // // 비밀번호 재확인
    // if (name === "userPwConfirm") { // 비동기라 순서가 늦게 진행될 때, userPwConfirm을 입력하고 있을 때 즉시 비교하여 작용한다.
    //   if (users.userPw === value) {  // 입력되는 value값을 즉시 호출한다.
    //     setUserPwConfirmMessage("");
    //   } else {
    //     setUserPwConfirmMessage("비밀번호가 일치하지 않습니다.");
    //   }
    // }

    // // 이름 확인
    // if (users.userName.length < 2 || users.userName.length > 5) {
    //     setUserNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!");
    // } else {
    //     setUserNameMessage("사용가능한 닉네임 입니다.");
    // }

    // // 생년월일 확인
    // if (name === "userBirth") {
    //     if (value.length != 8) {
    //         setUserBirthMessage("올바르지 않은 생년월일입니다.");
    //       } else {
    //         setUserBirthMessage("");
    //       }
    // }
    
    // // 연락처에 하이픈 추가
    // // if (
    // //   users.userPhoneNumber.length == 3 ||
    // //   users.userPhoneNumber.length == 8
    // // ) {
    // //   setUsers(currentNumber + "-");
    // //   onChangePhone(currentNumber + "-");
    // // } else {
    // //   onChangePhone(currentNumber);
    // // }

    // // 연락처 양식 확인
    // if (name === "serName"){
    //     const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    //     if (!phoneRegExp.test(value)) {
    //     setUserPhoneNumberMessage("올바른 형식이 아닙니다!");
    //     } else {
    //     setUserPhoneNumberMessage("");
    //     }
    // }
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(studentSignUp(users));
  };

  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full border border-yellow-200">
            <h1 class="mb-8 text-3xl text-center">회원가입</h1>
            <form method="POST" onSubmit={onSubmit}>
              <h2>이메일</h2>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                name="userEmail"
                onChange={(e) => onChangeHandler(e)}
                placeholder="example@kookbee.com"
              />
              <p className="message"> {userEmailMessage} </p>
              <h2>비밀번호</h2>
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                name="userPw"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Password"
              />
              <p className="message"> {userPwMessage} </p>
              <h2>비밀번호 재확인</h2>
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                name="userPwConfirm"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Confirm Password"
              />
              <p className="message"> {userPwConfirmMessage} </p>
              <h2>이름</h2>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                name="userName"
                onChange={(e) => onChangeHandler(e)}
                placeholder="김쿡비"
              />
              <p className="message"> {userNameMessage} </p>
              <h2>생년월일</h2>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                name="userBirth"
                onChange={(e) => onChangeHandler(e)}
                placeholder="19990508"
              />
              <p className="message"> {userBirthMessage} </p>
              <h2>연락처</h2>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                name="userPhoneNumber"
                onChange={(e) => onChangeHandler(e)}
                placeholder="010-1234-5678"
              />
              <p className="message"> {userPhoneNumberMessage} </p>
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  class="w-2/5 text-center py-3 rounded-lg text-black bg-yellow-200 focus:outline-none my-1"
                >
                  가입하기
                </button>
              </div>
            </form>
            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentSignUp;
