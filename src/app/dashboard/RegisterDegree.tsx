import { Card } from "@/components/ui/card";
import RegisterDegreeCard from "../cards/RegisterDegreeCard";
import Footer from "../../components/ui/Footer";

function RegisterDegree() {
  return (
    <>
       <div className="p-25 text-gray-700 font-serif">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-45">
            Welcome to Degrees Portal
          </h1>

          <Card className="p-8 shadow-xl shadow-sky-300/40 pr-0 w-[38vw]">
            <div className="text-center text-3xl font-semibold text-[#7AB8FF] ">
              <h2>Register a Degree</h2>
            </div>
            <div className="grid grid-cols-2">
              <span className="w-45 mt-12">
                <h3 className="text-3xl font-semibold">Be Aware</h3>
                <h6 className="font-serif mt-4">
                  Please Enter valid data to register a college
                </h6>
                </span>
                <span>
                <div className="p-2 shadow-lg shadow-sky-200/60 mt-8 mb-4 border bg-white rounded-2xl w-[24vw] " >
                    <RegisterDegreeCard />
              </div>
              </span>
            </div>
          </Card>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default RegisterDegree;
