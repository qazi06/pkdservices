import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDegrees } from "../API/DegreesData";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/Footer";

type DegreeOffer = {
  offerDegrees: string;
};

type AvailableDegreeItems = {
  _id: string;
  name: string;
  subName: string;
  description: string;
  offeringDegrees: string[];
  offerDegrees: DegreeOffer[];
  subjects?: Array<string[]>;
  jobs?: string[];
};

function AvailableColleges() {
  const { degreeId } = useParams();
  const [degree, setDegree] = useState<AvailableDegreeItems | null>(null);

  const getAvailableDegrees = async () => {
    try {
      const res = await getDegrees();
      const degreeData = res.data.find(
        (item: AvailableDegreeItems) => item._id === degreeId
      );

      if (degreeData) {
        setDegree(degreeData);
        console.log(degreeData);
      } else {
        console.log("Degree not found");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to load degree data");
    }
  };

  useEffect(() => {
    getAvailableDegrees();
  });


  if (!degree) return ;

  return (
    <div className="p-10 text-center font-serif">
      <h2 className="text-4xl font-semibold my-10 bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
        Degree Details
      </h2>

      <Card className="mt-42 mb-35 bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200 border-none focus:outline-none p-7">

        <div className="text-3xl font-semibold text-sky-400">{degree.name}</div>
        <div className="font-semibold text-[1.5rem] text-gray-600">
          {degree.subName}
        </div>

        {degree.description && (
          <div className="p-6 text-[1.2rem] pt-3 text-gray-700">
            {degree.description}
          </div>
        )}

        {degree.offeringDegrees && degree.offeringDegrees.length > 0 && (
          <>
            <div className="text-3xl text-sky-400 font-semibold mt-8">
              <h2>Degrees Available</h2>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
              {degree.offeringDegrees.map((degreeItem, index) => (
                <div
                  key={index}
                  className="text-center text-[1.2rem] bg-[#009689] text-white border py-2 px-3 rounded-lg hover:bg-[#00877a]"
                >
                  <div>{degreeItem}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {degree.subjects && degree.subjects.length > 0 && (
          <>
            <div className="text-3xl text-sky-400 font-semibold mt-4">
              <h2>Subjects Offered</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 mt-6">
              {degree.subjects.map((subjectGroup, groupIndex) => (
                <div key={groupIndex} className="space-y-2">
                  <h2 className="text-2xl font-semibold text-cyan-500 ">Semester {groupIndex + 1}</h2>
                  {subjectGroup.map((subject, subjectIndex) => (
                    <div
                      key={subjectIndex}
                      className="bg-[#ffffffc6] p-3 rounded-lg shadow-sm text-left "
                    >
                      <p className="text-gray-700 font-medium">{subject}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {degree.jobs && degree.jobs.length > 0 && (
          <>
            <div className="text-3xl text-sky-400 font-semibold mt-8">
              <h2>Which Careers are open to pursuing after BS Computer Science</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
              {degree.jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-[#ffffffc6] p-4 rounded-lg shadow-sm text-left"
                >
                  <p className="text-gray-700 font-medium">{job}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </Card>
     <div className="justify-center">
        <Link to="/degrees">
          <Button variant="outline">← Degrees</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default AvailableColleges;