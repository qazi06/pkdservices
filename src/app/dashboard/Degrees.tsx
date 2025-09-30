import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDegrees } from "../API/DegreesData";
import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";

type DegreeOffer = {
  offerDegrees: string;
};

type DataTableItem = {
  _id: string;
  name: string;
  tag: string;
  subName: string;
  description: string;
  detail: string;
  createdAt: string;
  selectedFile: string;
  link1: string;
  link2: string;
  offeringDegrees: string[];
  offerDegrees: DegreeOffer[];
};

function Degrees() {
  const [items, setItems] = useState<DataTableItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDegreesData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getDegrees();

      const transformedData: DataTableItem[] = response.data.map(
        (item: DataTableItem) => ({
         
          _id: item._id,
          name: item.name,
          tag: item.tag,
          subName: item.subName,
          description: item.description,
          selectedFile: item.selectedFile,
        })
      );

      setItems(transformedData);
      console.log(transformedData);
    } catch (error) {
      console.error("Failed to fetch college data:", error);
      setError("Failed to load college data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDegreesData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-muted-foreground">Loading degrees...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-destructive mb-2">{error}</p>
            <button
              onClick={getDegreesData}
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            >
              Retry
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="p-12 font-serif">
        <h1 className="h-20 text-5xl text-center mb-50 mt-15 font-semibold bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
          All Degrees
        </h1>
        <div>
          <div className="flex justify-end">
            <input
              className="border-2 w-50 rounded-2xl border-[#8EC5FF] pl-4 py-1 focus:outline-none"
              type="search"
              placeholder="Search..."
            />
          </div>

          <div className=" grid lg:grid-cols-5 gap-2 mt-6">
            {items.map((degrees, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100"
              >
                <img
                  className="rounded-tl-[13px] rounded-tr-[13px] relative bottom-6 h-60"
                  src={degrees.selectedFile}
                  alt="College Images"
                />
                <div className="text-[1.5rem] font-bold text-center relative bottom-7 text-sky-400">
                  {degrees.name}
                </div>
                <div className="text-[1.4rem] font-bold text-center relative bottom-8  ">
                  {degrees.subName}
                </div>
                <div className="text-center p-3 relative bottom-12 break-words">
                  {degrees.description}
                </div>
                <div className=" mt-auto text-center">
                  <Link to={`/degrees/${degrees._id}`}>
                    <Button className=" w-24 font-bold bg-white text-sky-700">
                      More
                    </Button>
                  </Link>
                  <Link to='/college'>
                  <Button className=" w-24 ml-5 font-bold bg-white text-cyan-700">
                    Colleges
                  </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Degrees;