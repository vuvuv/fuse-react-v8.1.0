import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalOpen, setModalOpen } from 'app/store/tableSlice';
import TagsEditor from './TagsEditor';
import TagsRenderer from './TagsRenderer';
import DataModal from './DataModal';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Table.css';

const TestTable = () => {
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState([]);
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectModalOpen);

  const [columnDefs] = useState([
    { field: 'id', rowDrag: true, sortable: true },
    { field: 'referenceNnumber', filter: true },
    { field: 'partNumber', filter: true },
    { field: 'description', filter: true },
    { field: 'quantity', filter: true },
    { field: 'name', filter: true },
    { field: 'primaryRemark', filter: true },
    { field: 'secondaryRemark', filter: true },
    { field: 'nsn', editable: true },
    { field: 'priority', filter: true },
    { field: 'myRefCount', filter: true },
    { field: 'status', filter: true },
    { field: 'type', filter: true },
    { field: 'comment', editable: true },
    { field: 'endUser', filter: true },
    { field: 'postDate', filter: true },
    { field: 'application', filter: true },
    { field: 'buyer', filter: true },
    { field: 'endDate', filter: true },
    { field: 'countByPartNo', filter: true },
    { field: 'countByReqNo', filter: true },
    {
      field: 'tags',
      editable: true,
      cellEditorPopup: true,
      width: 400,
      cellEditor: TagsEditor,
      cellEditorParams: { values: ['tag1', 'tag2', 'tag3'], cellRenderer: TagsRenderer },
      cellRenderer: TagsRenderer,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
    };
  }, []);

  useEffect(() => {
    fetch('https://api.mocki.io/v2/fda114b9')
      .then((result) => result.json())
      .then((data) => {
        setRowData(
          data.map((d) => ({
            id: d.bid.id,
            referenceNnumber: d.bid.referenceNnumber,
            partNumber: d.bid.part.partNumber,
            description: d.bid.part.description,
            quantity: d.bid.quantity,
            name: d.bid.unit.name,
            primaryRemark: d.bid.primaryRemark,
            secondaryRemark: d.bid.secondaryRemark,
            nsn: d.bid.nsn,
            priority: d.bid.priority,
            myRefCount: d.bid.myRefCount,
            status: d.bid.status,
            type: d.bid.type,
            comment: d.bid.comment,
            endUser: d.bid.endUser,
            postDate: d.postDate,
            application: d.application,
            buyer: d.buyer,
            endDate: d.endDate,
            countByPartNo: d.countByPartNo,
            countByReqNo: d.countByReqNo,
            tags: [...d.tags],
            currentCompany: d.bid.currentCompany,
          }))
        );
      });
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    const allColumnIds = [];
    gridRef.current.columnApi.getColumns().forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds, false);
  }, []);

  const handleRowClick = (params) => {
    const payload = { open: true, data: params.data };
    dispatch(setModalOpen(payload));
  };

  return (
    <div className="tableContainer">
      <div className="ag-theme-alpine" style={{ height: '83vh' }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onFirstDataRendered={onFirstDataRendered}
          onCellEditingStarted={(e) => e.preventDefault()}
          singleClickEdit
          rowDragManaged
          animateRows
          onRowClicked={(params) => handleRowClick(params)}
        />
        {modalOpen && <DataModal />}
      </div>
    </div>
  );
};

export default TestTable;
