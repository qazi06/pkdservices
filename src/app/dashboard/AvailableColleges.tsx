import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getColleges } from "../API/CollegesData";
import Footer from "@/components/ui/Footer";

type DegreeOffer = {
  offerDegrees: string;
};

type AvailableDegreeItems = {
  _id: string;
  name: string;
  subName: string;
  detail: string;
  offeringDegrees: string[];
  offerDegrees: DegreeOffer[];
};

function AvailableDegrees() {
    const { collegeId } = useParams();
  const [items, setItems] = useState<AvailableDegreeItems[]>([]);

  const getAvailableDegrees = async () => {
    try {
      const res = await getColleges();
      const degreeData = res.data.filter(
        (item: AvailableDegreeItems) => item._id === collegeId
      );

      setItems(degreeData);
      console.log(degreeData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvailableDegrees();
  }, []);
  return (
    <div className="p-10 text-center font-serif ">
      <h2 className="text-4xl font-semibold my-10 bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent">See More Colleges</h2>
      {items.map((degree) => (
        <Card key={degree._id} className="mt-42 mb-35  bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200  border-none focus:outline-none p-7">
          <div className="text-3xl font-semibold text-sky-400">{degree.name}</div>
          <div className="font-semibold text-[1.5rem] text-gray-600">{degree.subName}</div>
          <div className="p-6 text-[1.2rem] pt-0">{degree.detail}</div>
          <div className="text-3xl text-sky-400 font-semibold">
            <h2>External Links</h2>
          </div>
          <div className="grid grid-cols-2 gap-5 self-center">
            <button className="text-center text-[1.2rem] bg-[#009689] text-white border w-48 py-1 rounded-4xl">Prospectus</button>
            <button className="text-center text-[1.2rem] bg-[#009689] text-white  border w-48 py-1 rounded-4xl">College Website</button>
          </div>
          <div className="text-3xl text-sky-400 font-semibold mt-8">
            <h2>Degrees Available</h2>
          </div>
          <div className="grid grid-cols-5">
          {degree.offeringDegrees.map((degreeItem, index) => (
            <div key={index} className="text-center text-[1.2rem] bg-[#009689] text-white border py-1 rounded-4xl">
             <div>{degreeItem}</div> 
            </div>
          ))}
          </div>
        </Card>
      ))}
      <Footer />
    </div>
  );
}

export default AvailableDegrees;