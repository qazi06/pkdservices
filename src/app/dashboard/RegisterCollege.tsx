import { Card } from "@/components/ui/card";
import College from "./College";
import Footer from "../../components/ui/Footer";

function RegisterCollege() {
  return (
    <>
      <div className="p-25 text-gray-700 font-serif">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-45">
            Welcome To College Portal
          </h1>

          <Card>
            <div className="text-center text-3xl font-semibold text-[#7AB8FF]">
              <h2>Register A College</h2>
            </div>
            <div>
              <div className="w-45 ml-6 mt-8 ">
                <h3 className="text-3xl font-semibold">Be Aware</h3>
                <h6 className="font-serif mt-4">
                  Please Enter valid data to register a college
                </h6>
              </div>
              <div>
                <Card >
                  <div>
                    <College />
                  </div>
              </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterCollege;
