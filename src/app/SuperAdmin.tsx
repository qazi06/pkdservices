import { FaUsers, FaBuilding, FaGraduationCap, FaComment} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/ApiData";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";

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
      const response = await getUser();
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
        {/* <SectionCards /> */}
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
      <div className="text-4xl text-center p-30 text-gray-700 font-bold ">
        Welcome Super Admin
        <div className="mt-44 grid grid-cols-1 gap-4 @5xl/main:grid-cols-4">
          <Card className="bg-[#8EC5FF]">
            <div>
              <div className="text-6xl ml-8 text-gray-600">4</div>
              <FaUsers className="ml-8 text-5xl text-gray-600" />
              <div className="text-[20px] text-gray-600 relative bottom-8 left-4">User</div>
            </div>
          </Card>
          <Card className="bg-[#8EC5FF]">
            <div>
              <div className="text-6xl ml-8 text-gray-600">4</div>
              <FaBuilding className="ml-8 text-5xl text-gray-600 relative bottom-2" />
              <div className="text-[20px] relative bottom-8 left-4 text-gray-600">Institutes</div>
            </div>
          </Card>
          <Card className="bg-[#8EC5FF]">
            <div>
              <div className="text-6xl ml-8 text-gray-600">4</div>
              <FaGraduationCap className="ml-8 text-5xl text-gray-600" />
              <div className="text-[20px] text-gray-600 relative bottom-8 left-4">Degrees</div>
            </div>
          </Card>
         <Card className="bg-[#8EC5FF]">
            <div>
              <div className="text-6xl ml-8 text-gray-600">4</div>
              <FaComment className="ml-8 text-5xl text-gray-600" />
              <div className="text-[20px] text-gray-600 relative bottom-8 left-4">Suggestions</div>
            </div>
          </Card>
        </div>
      </div>
      <DataTable data={items} />
    </>
  );
}

export default SuperAdmin;
