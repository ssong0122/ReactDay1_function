import logo from "./logo.svg";
import "./App.css";

//프로파일 MyComponent 참조
import Profile from "./MyComponent";
import Profile2 from "./MyComponent2";
import Profile3 from "./Say";
import Say2 from "./Say2";

function App() {
  return (
    <div>
      {/* 프로파일 자식 컴포넌트 삽입 및 자식 요소에 속성을 정의하고 값을 전달하기 */}
      <Profile
        test="aaa"
        name="song"
        email="song@test.co.kr"
        telephone="010-1234-1234"
        age="20"
      >
        내 소개 1
      </Profile>

      <hr></hr>

      <Profile2
        test="aaa"
        name="song"
        email="song@test.co.kr"
        telephone="010-1234-1234"
        age={20}
      ></Profile2>

      <hr></hr>

      <Profile3 title="UseState를 통한 상태 관리 기법">상태 관리 예시</Profile3>

      <hr></hr>

      <Say2></Say2>
    </div>
  );
}

export default App;
