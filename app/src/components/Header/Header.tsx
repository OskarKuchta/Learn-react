import Greetings from "./Greetings";
import Login from "./Login";
import Exchange from "./Exchange";
const Header: React.FC = () => {
  return (
    <header>
      <Greetings lastTxt="on my page :D" greets="Hello" />
      <Login />
      <Exchange />
    </header>
  );
};

export default Header;
