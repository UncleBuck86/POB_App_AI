import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import usePOB from "../../store/usePOB";
import { useMemo, useRef, useState } from "react";

export default function POBGrid() {
  const gridRef = useRef<AgGridReact>(null);
  const { people } = usePOB();
  const [quickFilter, setQuickFilter] = useState("");

  const columnDefs = useMemo<ColDef[]>(() => [
    { headerName: "Name", field: "name", filter: true, sortable: true },
    { headerName: "Company", field: "company", filter: true, sortable: true },
    { headerName: "Role", field: "role", filter: true, sortable: true },
    { headerName: "Bunk", field: "bunk", width: 120 },
    { headerName: "Start", field: "rotationStart", width: 130 },
    { headerName: "End", field: "rotationEnd", width: 130 },
    { headerName: "Comment", field: "comment", flex: 1 },
  ], []);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium">Personnel On Board</div>
        <input
          className="border rounded-lg px-3 py-1 text-sm"
          placeholder="Quick filter..."
          value={quickFilter}
          onChange={(e) => setQuickFilter(e.target.value)}
        />
      </div>
      <div className="ag-theme-alpine" style={{ height: 420, width: "100%" }}>
        <AgGridReact
          ref={gridRef as any}
          rowData={people}
          columnDefs={columnDefs}
          animateRows
          quickFilterText={quickFilter}
          pagination
          paginationPageSize={25}
        />
      </div>
    </div>
  );
}
