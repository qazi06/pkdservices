import { useState} from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { getLogin } from "@/app/API/LoginPageApi"
import { useLocalStorage } from "@/app/store/useLocalStorage"
import { useNavigate } from "react-router-dom"


export function LoginForm({
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useLocalStorage<string>('loginemail', '');
  const [password, setPassword] = useLocalStorage<string>('loginpassword', '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please give the email password')
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await getLogin(email, password);
      console.log('Login Successful : ', res);

      navigate("/")

    } catch (error) {
      console.log('Login error : ', error)
      setError('Login failed. Please check your credentials.')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div {...props}>
      <Card className="backdrop-blur-lg bg-white/40 border border-blue-200/50 shadow-2xl rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          <div className="p-4 w-84">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-slate-700 mb-2">Login To Your Account</h1>
              </div>
              {error && (
                <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-2xl">
                {error}
                </div>
              )}
              <div className="grid gap-2">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <Input 
                    className="bg-white/60 w-76 backdrop-blur-sm border-blue-200/60 rounded-2xl pl-12 pr-2 py-2 text-slate-800 placeholder-slate-500 shadow-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                  <Input 
                    className="bg-white/40 w-76 backdrop-blur-sm border-white/30 rounded-2xl pl-12 pr-2 py-2 text-gray-700 placeholder-gray-500 shadow-lg" 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl py-4 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {loading ? 'Logging in ...' : 'Login'}
               
              </Button>
              <div className="text-center">
                <p className="text-slate-600 text-sm">
                  Forgot password? or{' '}
                  <a href="#" className="text-blue-500 hover:text-blue-700 hover:underline font-medium transition-colors">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}