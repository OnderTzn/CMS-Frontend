import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids'

import { contentsGrid } from "../../data/dummy";
import apiClient from '../../api/client';
import { Header } from '../../components';


const AllContents = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    apiClient.get('/contents')
      .then((res) => setContents(res.data))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch contents', err);
      });
  }, []);

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Contents" title="All contents" />
      <GridComponent
        id="gridcomp"
        dataSource={contents}
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

export default AllContents;
