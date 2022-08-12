import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids'

import { contentData, contentsGrid, licenseData, ordersData, ContextMenuItems, ordersGrid } from "../../data/dummy";
import { Header } from '../../components';


const AllContents = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Contents" title="All contents" />
      <GridComponent
        id="gridcomp"
        dataSource={contentData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width= "auto">
        <ColumnsDirective>
          {contentsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default AllContents