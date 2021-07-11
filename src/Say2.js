import React, { useState } from "react";

const Say2 = () => {
  //색상 텍스트 데이터 정의
  const [color, setColor] = useState("black");

  const [message, setMessage] = useState("안녕하세요.");

  const [user, SetUser] = useState({
    username: "강창훈",
    email: "test@test.com",
    telephone: "010-1234-1234",
  });

  //입장 버튼 클릭 이벤트 처리기 함수
  const onClickEnter = () => {
    setMessage("어서오세요. 환영합니다.");
  };

  //퇴장 버튼 클릭 이벤트 처리기 함수
  const onClickLeave = () => {
    setMessage("안녕히 가세요.");
  };

  //사용자 정보 변경 처리 이벤트 처리기 함수
  const changeUserInfo = () => {
    //(...)스프레드 연산자를 통한 기존 객체의 복사본을 만들고 복사본 내 특정 속성값을 변경한 후 user객체를 통째로 변경 적용한다.
    //SetUser({ ...user, email: "song@test.co.kr" });

    //기존 객체의 다른 속성값은 유지하면서 특정 속성값만 바꿔서 객체를 변경하고자 할 때는 spread연산자(...)를 이용해 복사본을 만들어 그 값을 대체한다.
    const newUser = { ...user, email: "ceo@test.co.kr" };
    SetUser(newUser);
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/* color: color 로 해도 됨  */}
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>
      <hr></hr>
      이메일 :{user.email}
      <br></br>
      이름 :{user.username}
      <br></br>
      전화번호 :{user.telephone}
      <br></br>
      <button onClick={changeUserInfo}>정보 변경</button>
    </div>
  );
};

export default Say2;
