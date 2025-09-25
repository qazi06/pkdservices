import { useEffect, useState } from "react";
import { getUser } from "@/app/Api-Intigration/CollegesData";
import { Card } from "@/components/ui/card";
import Footer from "../../components/ui/Footer";

type DataTableItem = {
  id: string;
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

function College() {
  const [items, setItems] = useState<DataTableItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCollegeData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getUser();

      const transformedData: DataTableItem[] = response.data.map(
        (item: DataTableItem, index: number) => ({
          id: index + 1,
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
      <div className="p-12">
        <h1 className="text-5xl text-center my-30 font-semibold">
          All Colleges
        </h1>
        <div>
          <div className="flex justify-end">
            <input
              className="border-2 w-50 rounded-2xl border-[#8EC5FF] pl-4 py-1 "
              type="search"
              placeholder="Search..."
            />
          </div>

          <div className=" grid lg:grid-cols-4 gap-2">
            {items.map((college) => (
              <Card key={college.id}>
                <img className="rounded-tl-[13px] rounded-tr-[13px] relative bottom-6 h-65" src={college.selectedFile} alt="College Images" />
                <div className="text-4xl font-bold">{college.name}</div>
                <div className="text-2xl font-bold">{college.subName}</div>
                <div className="text-2xl">{college.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default College;
