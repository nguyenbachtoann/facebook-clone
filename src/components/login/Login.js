import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { AuthContext } from "../../context";
function Login() {
  const authContext = useContext(AuthContext);
  const { login } = authContext;

  return (
    <div className="login">
      <div
        className="login__container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
}

export { Login };
