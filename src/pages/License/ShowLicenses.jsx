import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import apiClient from '../../api/client';
import { licenseGrid } from '../../data/dummy';
import { Header } from '../../components';

const ShowLicenses = () => {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    apiClient.get('/licenses')
      .then((res) => setLicenses(res.data))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch licenses', err);
      });
  }, []);

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="License" title="Show licenses" />
      <GridComponent
        id='licensesGrid'
        dataSource={licenses}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {licenseGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default ShowLicenses;
