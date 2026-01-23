import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, ArrowDown, Pencil, Trash } from "lucide-react";
import reportsData from "@/data/reports.json";
import DashboardCreateReportButton from "./DashboardCreateReportButton";
import DashboardSearch from "./DashboardSearch";

type CMAReport = {
  id: string;
  name: string;
  createdAt: string;
};

export default function CMAReports() {
  const cmaReports: CMAReport[] = reportsData.cmaReports;

  return (
    <div className="p-1 w-full">
      <Card className="w-full bg-card ">
        <CardHeader className="-mt-4 w-full" >
          <CardTitle className="flex items-center justify-between w-full gap-2 text-md">
            {/* <FolderOpen className="h-5 w-5 text-muted-foreground text-text" />
            CMA REPORTS */}
            <div className="flex items-center w-full justify-between px-4 mt-4">
          <DashboardSearch />
          <DashboardCreateReportButton />
        </div> 
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto -mt-6">
            <table className="w-full text-sm  ">
              {/* ✅ TABLE HEADER — ALWAYS VISIBLE */}
              <thead className="border-b bg-muted/40">
                <tr className="mt-0">
                  <th className="px-4 py-3 text-left"> </th>
                  <th className="px-4 py-3 text-left">REPORT NAME</th>
                  <th className="px-4 py-3 text-left">CREATED DATE</th>
                  <th className="px-4 py-3 text-right">ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {/* ✅ DATA EXISTS */}
                {cmaReports.length > 0 ? (
                  cmaReports.map((report) => (
                    <tr key={report.id} className="border-b -mt-4">
                      <td className="px-4 py-3 font-medium">
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 p-2"
                        >
                          <ArrowDown
                            className="h-5 w-5 text-white"
                            strokeWidth={3}
                          />
                        </Button>
                      </td>
                      <td className="px-4 py-3 font-medium">
                        {report.name}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {report.createdAt}
                      </td>
                      <td className="px-4 py-3 flex justify-end gap-2">

                        <Button size="sm" variant="secondary">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  /* ✅ NO DATA ROW (but header still visible) */
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-10 text-center text-muted-foreground"
                    >
                      No CMA reports found. Click <b>Create CMA Report</b> to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>


        </CardContent>
      </Card>
    </div>
  );
}
