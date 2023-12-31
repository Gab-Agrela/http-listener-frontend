import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";

import { auth, provider } from "../../auth/firebaseClient";
import { Spin } from "../../Commom/Components/Spin";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = () => {
    signInWithRedirect(auth, provider);
  };
  useEffect(() => {
    setIsLoading(true)
    getRedirectResult(auth)
      .then((result) => {
        const credential =
          result && GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const userInfo = result?.user;
        if(token && userInfo) {
          localStorage.setItem(
            "auth",
            JSON.stringify({ token: token, info: userInfo })
          );
          navigate("/automate");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, [navigate]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <h1>Login</h1>
          <button onClick={signIn}>Logar com Google</button>
        </>
      )}
    </>
  );
};

export { Login };
