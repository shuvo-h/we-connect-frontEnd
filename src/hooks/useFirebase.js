import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authLoginError, setAuthLoginError] = useState("");
  const [authSignUpError, setAuthSignUpError] = useState("");
  const [authGoogleError, setAuthGoogleError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  //register
  // Email-Password Register Process
  const registerUser = (email, password, name, navigate, userInfo) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthSignUpError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // Save User to the Database
        saveUser(userInfo);
        // email, name, "", "POST";

        // Send Name to Firebase after Creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((user) => {})
          .catch((error) => {});

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          setAuthSuccess("");
          setAuthSignUpError("User already exists!");
          return;
        } else if (errorCode === "auth/internal-error") {
          setAuthSuccess("");
          setAuthSignUpError("Something went wrong!");
          return;
        } else {
          setAuthSuccess("");
          setAuthLoginError(errorMessage);
          return;
        }
      })
      .finally(() => setIsLoading(false));
  };

  // login
  // Email-Password LogIn Process
  const loginUser = (email, password, navigate,location) => {
    setIsLoading(true);
    
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate(location, {replace: true});
        setAuthLoginError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          setAuthSuccess("");
          setAuthLoginError("Wrong Password!");
          return;
        } else if (errorCode === "auth/user-not-found") {
          setAuthSuccess("");
          setAuthLoginError("User not found! Please Sign Up first!");
          return;
        } else if (errorCode === "auth/too-many-requests") {
          setAuthSuccess("");
          setAuthLoginError(
            "This user temporarily disabled due to many failed requests!"
          );
          return;
        } else {
          setAuthSuccess("");
          setAuthLoginError(errorMessage);
          return;
        }
      })
      .finally(() => setIsLoading(false));
  };

  // Observe User State Process
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // Google SignIn Process
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        saveUser({email:user.email, name:user.displayName, img:user?.photoURL});
        navigate("/");
        setAuthGoogleError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          setAuthGoogleError(errorMessage);
          // setAuthGoogleError(errorCode);
        }
      })
      .finally(() => setIsLoading(false));
  };

  /* // Check isAdmin
	useEffect(() => {
		const url = `https://natural-honey.herokuapp.com/users/${user?.email}`;
		fetch(url)
			.then(res => res.json())
			.then(data => setAdmin(data.admin));

	}, [user?.email]); */

  // SignOut Process
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // window.confirm('Please Confirm Log-Out Request!');
      })
      .catch((error) => {
        setAuthGoogleError(error.message);
      });
  };

  // Save User Data
  const saveUser = (userInfo) => {
    // const user = { email, displayName, image };
    fetch("https://shrouded-wave-36908.herokuapp.com/newuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then(res => res.json())
		.then(data=>{
			if (data.insertedId) {
				alert("Registration Successfull!")
			}
		});
  };

  return {
    user,
    admin,
    authLoginError,
    authSignUpError,
    authGoogleError,
    isLoading,
    authSuccess,
    setAuthSuccess,
    setAuthSignUpError,
    setAuthLoginError,
    setIsLoading,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
