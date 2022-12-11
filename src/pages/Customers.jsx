import React, { Component } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { customersData } from '../data/dummy';

import { Header } from '../components';

class Orders extends Component {
  constructor() {
    super(...arguments);
    this.customerGridImage = this.gridImage;
    this.customerGridStatus = this.gridStatus;
    this.pageOptions = {
      pageSize: 10, pageSizes: true
    }
    this.editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.created = () => {
      document.getElementById(this.grid.element.id + "_searchbar").addEventListener('keyup', () => {
        this.grid.search(event.target.value);
      });
    };
  }

  gridImage(props) {
    return (
      <div className="image flex gap-4">
        <img
          className="rounded-full w-10 h-10"
          src={props.CustomerImage}
          alt="employee"
        />
        <div>
          <p>{props.CustomerName}</p>
          <p>{props.CustomerEmail}</p>
        </div>
      </div>
    );
  }

  gridStatus(props) {
    return (
      <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
        <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
        <p>{props.Status}</p>
      </div>
      )
  }
  render() {
    return (
      <div className='m-2 md:m-5 p-2 md:p-5 bg-white rounded-3xl'>
        <Header category="Page" title="Customers"  ></Header>
        <GridComponent
          dataSource={customersData}
          allowPaging={true}
          allowSorting={true}
          pageSettings={this.pageOptions}
          editSettings={this.editOptions} 
          toolbar={['Search']} ref={g => this.grid = g} created={this.created} >
          <ColumnsDirective>
            <ColumnDirective type='checkbox' width='50'/>
            <ColumnDirective field='CustomerName' headerText='Name' width='150' textAlign="Center" template={this.customerGridImage} />
            <ColumnDirective field='ProjectName' headerText='Project Name' width='150'  textAlign='Center' />
            <ColumnDirective field='Status' headerText='Status' width='130' format='yMd' textAlign="Center" template={this.customerGridStatus}/>
            <ColumnDirective field='Weeks' headerText='Weeks' width='100' format="C2" textAlign="Center"  />
            <ColumnDirective field='Budget' headerText='Budget' width='100' format='yMd' textAlign='Center' />
            <ColumnDirective field='Location' headerText='Location' width='150' textAlign='Center' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' textAlign='Center' isPrimaryKey={true} />
          </ColumnsDirective>
          <Inject services={[Resize, ContextMenu, ExcelExport, Page, Sort, Filter, Edit, PdfExport]} />
        </GridComponent>
      </div>
    )
  }
}

export default Orders 