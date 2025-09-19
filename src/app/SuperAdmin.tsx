
import { useEffect, useState } from "react";
import { getUser } from "@/lib/ApiData";
import { DataTable } from "@/components/data-table";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
      
      const transformedData: DataTableItem[] = response.data.map((item: College, index: number) => ({
        id: index + 1,
        header: item.name,
        type: item.tag,
        status: item.subName,
        target: item.createdAt,
        limit: item.link2 || '',
        reviewer: item.link1 || '',
      }));
      
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
      <div className="text-4xl text-center p-30 text-[#EA7131] font-bold ">
      Welcome Super Admin
    <div className="*:data-[slot=card]:from-primary/5 mt-44 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {
        [0,1,2,3].map(() => (
          <Card>
        <CardHeader>
          <CardTitle className="text-[4rem]">
          4
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col text-2xl ">
          User
        </CardFooter>
      </Card>
        ))
      }
    </div>
    </div>
      <DataTable data={items} />
    </>
  );
}

export default SuperAdmin