import React from "react";

//prop-types 참조하여 props 속성들의 데이터 형식 체크하기
import PropTypes from "prop-types";

const MyComponent2 = ({ name, telephone, email, age }) => {
  return (
    <div>
      <h1>프로파일2</h1>
      <table
        style={{ width: "500px", height: "50px", border: "1px solid gray" }}
      >
        <tr>
          <td>이름</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>{telephone}</td>
        </tr>
        <tr>
          <td>메일주소</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>나이</td>
          <td>{age}</td>
        </tr>
        <tr>
          <td colSpan="2">
            <button>확인</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

//전달되는 props 속성 중 age속성 값은 반드시 숫자형이어야 한다.
//isRequired를 쓰면 age값이 숫자형으로 반드시 props로 전달되어야 한다.
MyComponent2.propTypes = {
  age: PropTypes.number.isRequired,
};

export default MyComponent2;
