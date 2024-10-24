'use client';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef, IRowNode } from 'ag-grid-community';

interface TableTemplateProps {
  rowData: any[];
  colDefs: ColDef[];
  pageSize?: number;
  loading?: boolean;
  rowSelection?: 'multiple';
  isRowSelectable?: (rowNode: IRowNode<any>) => boolean;
  onSelectionChanged?: (params: any) => void;
}

export default function TableTemplate({
  rowData,
  colDefs,
  pageSize = 20,
  loading = false,
  rowSelection = 'multiple',
  isRowSelectable,
  onSelectionChanged,
}: TableTemplateProps) {
  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
      }}
      >
        <div>Cargando datos...</div>
      </div>
    );
  }

  return (
    <div className='ag-theme-quartz' style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination
        paginationPageSize={pageSize}
        rowSelection={rowSelection}
        isRowSelectable={isRowSelectable}
        onSelectionChanged={onSelectionChanged}
      />
    </div>
  );
}

TableTemplate.defaultProps = {
  pageSize: 10,
  loading: true,
  rowSelection: 'multiple',
  isRowSelectable: undefined,
  onSelectionChanged: undefined,
};
