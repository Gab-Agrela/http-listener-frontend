import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";

import { auth, provider } from "../../auth/firebaseClient";
import Spin from "../../Commom/Components/Spin";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [, setUserData] = useState({
    token: "",
    user: "",
  });
  const navigate = useNavigate();

  const signIn = () => {
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUserData({
          token,
          user,
        });
        setIsLoading(false);
        navigate("/automate");
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
