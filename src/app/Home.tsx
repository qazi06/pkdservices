import { LoginForm } from "@/components/login-form";
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from "@tabler/icons-react";

export default function LoginPage() {
  return (
    <div className=" flex mt-42 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold relative bottom-[7rem]  text-gray-700">
        Welcome To User Registration Portal
      </h1>
      <div className=" w-[28rem]">
        <LoginForm />
      </div>
      <footer className="flex p-18 w-full ">
        <div className="flex flex-row w-[70rem] ml-[2rem]">
        <div className="ml-22 font-bold font-serif text-gray-700">
            <h1 className="text-3xl text-gray-700">Go To</h1>
          <div className="leading-9">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-12 font-bold font-serif text-gray-700">
            <h1 className="text-3xl text-gray-700">Institution</h1>
          <div className="leading-9">
            <ul>
              <li>
                <a href="#">College</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-12 font-bold font-serif text-gray-700">
            <h1 className="text-3xl text-gray-700">Related Link</h1>
          <div className="leading-9">
            <ul>
              <li>
                <a href="#">Okas</a>
              </li>
              <li>
                <a href="#">Bise</a>
              </li>
              <li>
                <a href="#">Punjab University</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="w-[20rem] text-center">
        <h1 className="text-3xl text-gray-700 font-bold font-serif">Social Media</h1> 
        <div className="flex p-6 gap-8 ml-8" >
        <IconBrandFacebook />
        <IconBrandTwitter />
        <IconBrandInstagram />
        </div>
        </div>
      </footer>
    </div>
  );
}
