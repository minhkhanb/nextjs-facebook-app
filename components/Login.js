import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src={require("../images/facebook-logo.png")}
        height={400}
        width={400}
        objectFit="contain"
        alt="Facebook"
      />

      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-center text-white cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
