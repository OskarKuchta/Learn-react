import { useState } from "react";
import Button from "../Button";

const Login: React.FC = () => {
  const [checkstatus, setCheckstatus] = useState<boolean>(true);
  const switchState: () => void = () => {
    setCheckstatus((current) => !current);
  };
  return (
    <>
      {checkstatus ? (
        <>
          <p>Need to login</p>
          <Button onClick={switchState} className="btn blue">
            Login
          </Button>
          <br />
        </>
      ) : (
        <>
          <p>Logout from account</p>
          <Button onClick={switchState} className="btn blue">
            Logout
          </Button>
          <br />
        </>
      )}
    </>
  );
};

export default Login;
