import React, { Component } from 'react';
import {GrLocation} from 'react-icons/gr'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid,contextMenuItems } from '../data/dummy';

import { Header } from '../components';

class Employees extends Component {
  constructor() {
    super(...arguments);
    this.gridEmployeeProfile = this.gridProfile;
    this.gridEmployeeCountry = this.gridCountry;
    this.created = () => {
      document.getElementById(this.grid.element.id + "_searchbar").addEventListener('keyup', () => {
        this.grid.search(event.target.value);
      });
    };
    this.pageOptions = {
      pageSize: 8, pageSizes: true
    }
  }

  gridProfile(props) {
    return (
      <div className="flex items-center gap-2">
        <img
          className="rounded-full w-10 h-10"
          src={props.EmployeeImage}
          alt="employee"
        />
        <p>{props.Name}</p>
      </div>
    );
  }

  gridCountry(props) {
    return (
      <div className="flex items-center justify-center gap-2">
        <GrLocation />
        <span>{props.Country}</span>
      </div>
      )
  }
  render() {
    return (
      <div className='m-2 md:m-5 p-2 md:p-5 bg-white rounded-3xl'>
        <Header category="Page" title="Employees"  ></Header>
        <GridComponent
          dataSource={employeesData}
          allowPaging={true}
          allowSorting={true}
          pageSettings={this.pageOptions}
          toolbar={['Search']} ref={g => this.grid = g} created={this.created} >
          <ColumnsDirective>
            <ColumnDirective field='Employee' headerText='Employee' width='150' textAlign="Center" template={this.gridEmployeeProfile} />
            <ColumnDirective field='Name' headerText='' width='0' textAlign='Center' />
            <ColumnDirective field='Title' headerText='Designation' width='170' textAlign="Center" />
            <ColumnDirective field='Country' width='120' textAlign="Center" template={this.gridEmployeeCountry}/>
            <ColumnDirective field='HireDate' headerText='Hire Date' width='135' textAlign='Center' />
            <ColumnDirective field='ReportsTo' headerText='Reports To' width='120' textAlign='Center' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='125' textAlign='Center' />
          </ColumnsDirective>
          <Inject services={[Resize, ContextMenu, ExcelExport, Page, Sort, Filter, Edit, PdfExport, Toolbar]} />
        </GridComponent>
      </div>
    )
  }
}

export default Employees