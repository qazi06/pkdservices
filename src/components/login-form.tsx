// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  // className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div  {...props}>
      <Card className="overflow-hidden p-1 bg-gray-400 text-black">
        <CardContent>
          <form className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-gray-700">Login To Your Account</h1>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input className="bg-white p-1 rounded-2xl pl-[10px]"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input className="bg-white p-1 rounded-2xl pl-[10px]" id="password" type="password" required />
              </div>
              <Button variant={"outline"} type="submit" className="w-full bg-white rounded-2xl">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
