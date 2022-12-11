import React, { Component } from 'react';
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../data/dummy';

class SparkLine extends React.PureComponent{
  render(){
    return (<SparklineComponent 
      id='line-sparkline' 
      height='80px' 
      width='250px'
      lineWidth={1} 
      valueType="Numeric"
      border={{color:"blue", width: 2}}
      dataSource={SparklineAreaData} 
      fill="blue"
      type="Line"
      xName='xval' yName='yval'
      
      >
      
        <Inject services={{SparklineTooltip}} ></Inject>
    </SparklineComponent>);
  }
}



export default SparkLine