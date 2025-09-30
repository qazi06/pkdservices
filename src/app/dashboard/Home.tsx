import Footer from "@/components/ui/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import interImg from "../../assets/inter.0ed02345548e9991209e.png";
import bachelorImg from "../../assets/masters.a925a959280fe481031b.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="text-center p-22 ">
        <h1 className="text-4xl font-bold h-20 bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent ">
          Welcome to Creer & Degree Counselling
        </h1>
        <div className="grid grid-cols-2 gap-6 mt-23">
          <Card>
            <img
              className="rounded-tl-[13px] rounded-tr-[13px] relative bottom-6 h-60"
              src={interImg}
              alt="Intermediate degrees"
            />
            <div className="text-2xl font-bold text-sky-400 relative bottom-6">
              <h2>Intermediate and Higher Secondary School Certificate</h2>
            </div>
            <div className="relative bottom-6">
              <h3 className="text-[1.7rem] font-semibold text-gray-700">A College level Education</h3>
              <p className="p-2 px-4">Secondary is an important segment in every person's life</p>
            </div>
          </Card>
          <Card>
            <img
              className="rounded-tl-[13px] rounded-tr-[13px] relative bottom-6 h-60"
              src={bachelorImg}
              alt="Master's degrees"
            />
            <div className="text-2xl font-bold text-sky-400 relative bottom-6"><h2>Bachelor Studies/Graduation and Masters</h2></div>
            <div className="relative bottom-6">
              <h3 className="text-[1.7rem] font-semibold text-gray-700">A University level Education</h3>
              <p className="p-2 px-4">
                A Bechelor of Science (B.S) degree can generally be earned in
                four years of full time undergraduate study.The benefits of
                earning a B.S degree are numerous, including increased
                employment opportunities and possibly higher wages
              </p>
            </div>
          </Card>
        </div>
        <Link to="/">
        <Button className="mt-10 bg-sky-400">Let's Start</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;


