import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import dummy from "../dummy/data";
import { themeQuartz } from "ag-grid-community";

// to use myTheme in an application, pass it to the theme grid option
const myTheme = themeQuartz.withParams({
  accentColor: "#15BDE8",
  backgroundColor: "#CFCFE6",
  borderColor: "#00000000",
  borderRadius: 20,
  browserColorScheme: "dark",
  cellHorizontalPaddingScale: 1,
  cellTextColor: "#000000",
  chromeBackgroundColor: "#000000",
  columnBorder: false,
  fontFamily: {
    googleFont: "Roboto",
  },
  fontSize: 16,
  foregroundColor: "#000000",
  headerBackgroundColor: "#2E3259",
  headerFontSize: 14,
  headerFontWeight: 500,
  headerTextColor: "#FFFFFF",
  headerVerticalPaddingScale: 0.9,
  iconSize: 20,
  oddRowBackgroundColor: "#6B6BBE",
  rowBorder: false,
  rowVerticalPaddingScale: 1.2,
  sidePanelBorder: false,
  spacing: 8,
  wrapperBorder: false,
  wrapperBorderRadius: 30,
});

ModuleRegistry.registerModules([AllCommunityModule]);

function Grid() {
  const [rowData] = useState(dummy.rowData);

  const [colDefs] = useState(dummy.colDefs);

  return (
    <div style={{ height: 700 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={{ flex: 1 }}
        pagination={true}
        paginationAutoPageSize={true}
        theme={myTheme}
      />
    </div>
  );
}

export default Grid;
