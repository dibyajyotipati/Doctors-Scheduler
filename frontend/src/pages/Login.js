import React, { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { toast,Slide } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const mt10Ref = useRef(null);
  const [mt10Width, setMt10Width] = useState(0);
  const [loading,setLoading]= useState(false)

  useEffect(() => {
    if (mt10Ref.current) {
      const width = mt10Ref.current.getBoundingClientRect().width;
      setMt10Width(width);
    }
  }, []);

  function Spinner() {
    return (
      <div className="w-full h-full bg-black bg-opacity-85 text-center absolute flex justify-center items-center flex-col z-50">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        <h2 className="text-zinc-900 dark:text-lightsteelblue-200 mt-4">Just a sec...</h2>
        <p className="text-zinc-900 dark:text-white">
          
        </p>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      toast.error( "Fill all the fields !" , {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
      return;
    }
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_LINKED}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    if (!response.ok) {
      toast.error( json.error , {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
        setLoading(false)
    }
    if (response.ok) {
      toast.success('Login Successful', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
      sessionStorage.setItem("Patient", JSON.stringify(json));
      setLoading(false)
      navigate("/appointment");
    }
    setFormData({
      email: "",
      password: "",
    });
  };
  const handlegoogle = async (email) => {
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_LINKED}/googlelogin`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({email:email}),
    });
    const json = await response.json();
    if (!response.ok) {
      toast.error( json.error , {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
        setLoading(false)
    }
    if (response.ok) {
      toast.success('Login Successful', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
      sessionStorage.setItem("Patient", JSON.stringify(json));
      setLoading(false)
      navigate("/appointment");
    }
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        className="bg-white w-1/4 xl:w-1/3 mq1125:w-2/5 mq1025:1/2 mq750:w-3/5 sm:w-2/3 sm:min-w-[310px] dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800"
        onSubmit={handleSubmit}
      >
        <div className="px-8 py-10 md:px-10">
          <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
            Welcome Back!
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
            We missed you, login to continue.
          </p>
          <div className="mt-10">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                for="email"
              >
                Email
              </label>
              <input
                placeholder="you@example.com"
                className="block w-5/6 px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-6">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                for="password"
              >
                Password
              </label>
              <input
                placeholder="••••••••"
                className="block w-5/6 px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="password"
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
               <label
                className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mt-1"
                onClick={()=>navigate("/verify")}
              >
               Forgot Password ?
              </label>
            </div>
            <div className="mt-10" ref={mt10Ref}>
              <button
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800 cursor-pointer"
                type="submit"
              >
                Let's Go
              </button>
            </div>
            <div className="flex items-center justify-center pt-3">
            <GoogleLogin size="large" width={"${mt10Width}px"} logo_alignment="left"
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                handlegoogle(decoded.email)
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
          <div className="text-sm text-blue-900 dark:text-blue-300 text-center flex flex-row justify-center gap-1">
            Don't have an account ?
            <a className="font-medium underline text-cyan-400" href="/signup">
              Sign up
            </a>
          </div>
        </div>
      </form>
      {loading && <Spinner />}
    </div>
  );
}

export default Login;
