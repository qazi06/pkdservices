import { LoginForm } from "@/components/login-form";
import Footer from "./Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br  flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-12 text-center h-20 bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Career and Degree Counselling Portal
        </h1>
        <div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}