import React, { Component } from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids';

import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy';

import { Header } from '../components';

class Orders extends Component{
  constructor() {
    super(...arguments);
    this.template = this.gridOrderImage;
    this.buttonTemplate = this.gridOrderStatus;
    this.pageOptions = {
      pageSize: 8, pageSizes: true
    }
  }

  gridOrderImage(props) {
    return (
      <div>
        <img
          className="rounded-xl h-20 md:ml-3"
          src={props.ProductImage}
          alt="order-item"
        />
      </div>
    );
  }

  gridOrderStatus(props) {
    return (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>)
  }
  render(){
    return (
      <div className='m-2 md:m-5 p-2 md:p-5 bg-white rounded-3xl'>
        <Header category="Page" title="Order"  ></Header>
        <GridComponent 
        dataSource={ordersData} 
        allowPaging={true}
        allowSorting={true}
        pageSettings={this.pageOptions} >
          <ColumnsDirective>
            <ColumnDirective field='ProductImage' headerText='Image' width='120' textAlign="Center" template={this.template} />
            <ColumnDirective field='OrderItems' headerText='Item' width='150' editType='dropdownedit' textAlign='Center'/>
            <ColumnDirective field='CustomerName' headerText='Customer Name'  width='150' textAlign="Center" />
            <ColumnDirective field='TotalAmount' width='150' format="C2" textAlign="Center" editType='numericedit' />
            <ColumnDirective field='OrderItems' headerText='Status' template={this.buttonTemplate} width='120' textAlign='Center' />
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Center' />
            <ColumnDirective field='Location' headerText='Location'  width='150' textAlign='Center' />
          </ColumnsDirective>
          <Inject services={[Resize,ContextMenu,ExcelExport,Page, Sort, Filter, Edit, PdfExport]} />
        </GridComponent>
      </div>
    )
  }
}

export default Orders 