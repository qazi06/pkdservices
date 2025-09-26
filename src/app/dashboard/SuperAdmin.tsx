import {
  FaUsers,
  FaBuilding,
  FaGraduationCap,
  FaComment,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getColleges } from "@/app/API/CollegesData";
// import { DataTable } from "@/components/data-table";
import { CollegeDataTable } from "@/components/ui/college-data-table";
import { Card } from "@/components/ui/card";
import Footer from "../../components/ui/Footer";

export type College = {
  _id: string;
  name: string;
  tag: string;
  subName: string;
  description: string;
  detail: string;
  createdAt: string;
  offeringDegrees: string;
  selectedFile: string;
  link1: string;
  link2: string;
};

type DataTableItem = {
  id: number;
  header: string;
  type: string;
  status: string;
  target: string;
  limit: string;
  reviewer: string;
};

function SuperAdmin() {
  const [items, setItems] = useState<DataTableItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCollegeData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getColleges();
      console.log(response.data);

      const transformedData: DataTableItem[] = response.data.map(
        (item: College, index: number) => ({
          id: index + 1,
          header: item.name,
          type: item.tag,
          status: item.subName,
          target: item.createdAt,
          limit: item.link2 || "",
          reviewer: item.link1 || "",
        })
      );

      setItems(transformedData);
    } catch (error) {
      console.error("Failed to fetch college data:", error);
      setError("Failed to load college data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCollegeData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-muted-foreground">Loading colleges...</p>
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
              onClick={getCollegeData}
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
      <div className="text-4xl text-center p-30 font-bold">
        <h1 className="h-20 bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent ">
          Welcome Super Admin
        </h1>
        <div className="mt-8 md:mt-16 lg:mt-20 xl:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
          <Card className="bg-[#8EC5FF] hover:bg-[#7AB8FF] transition-colors duration-200">
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <FaUsers className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 opacity-80" />
                <div className="flex flex-col">
                  <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-600 mb-1 mr-18">
                    4
                  </div>
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-600 mr-18">
                    Users
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="bg-[#8EC5FF] hover:bg-[#7AB8FF] transition-colors duration-200">
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <FaBuilding className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 opacity-80" />
                <div className="flex flex-col">
                  <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-600 mb-1 mr-18">
                    4
                  </div>
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-600 mr-18 ">
                    Intstitutes
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="bg-[#8EC5FF] hover:bg-[#7AB8FF] transition-colors duration-200">
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <FaGraduationCap className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 opacity-80" />
                <div className="flex flex-col">
                  <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-600 mb-1 mr-18">
                    4
                  </div>
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-600 mr-18 ">
                    Degrees
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="bg-[#8EC5FF] hover:bg-[#7AB8FF] transition-colors duration-200">
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <FaComment className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 opacity-80" />
                <div className="flex flex-col">
                  <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-600 mb-1 mr-18">
                    4
                  </div>
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-600 mr-18 ">
                    Suggestions
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <CollegeDataTable data={items} />
      <Footer />
    </>
  );
}

export default SuperAdmin;
