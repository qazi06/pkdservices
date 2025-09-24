import { LoginForm } from "@/components/login-form";
import Footer from "./Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-12 text-slate-700 text-center">
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