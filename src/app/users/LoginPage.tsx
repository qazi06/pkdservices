import { LoginForm } from "@/components/login-form";
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from "@tabler/icons-react";

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
      <footer className="mt-16">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="font-bold font-serif text-slate-700">
              <h1 className="text-2xl text-emerald-700 mb-4">Go To</h1>
              <div className="leading-8">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-emerald-600 transition-colors">About</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="font-bold font-serif ">
              <h1 className="text-2xl text-emerald-700 mb-4">Institution</h1>
              <div className="leading-8">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-emerald-600 transition-colors">College</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="font-bold font-serif">
              <h1 className="text-2xl text-emerald-700 mb-4">Related Link</h1>
              <div className="leading-8">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Okas</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Bise</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Punjab University</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl text-emerald-700 font-bold font-serif mb-4">Social Media</h1> 
              <div className="flex justify-center md:justify-start gap-6">
                <a href="#" className="hover:scale-110 transition-transform">
                  <IconBrandFacebook />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <IconBrandTwitter />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <IconBrandInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}