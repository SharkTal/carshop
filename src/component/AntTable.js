import React from 'react';
import { Table} from 'antd';
import 'antd/dist/antd.css';

const CarTable = (props) =>{

 
    return (
        <div>
            <Table columns={props.columns} dataSource={props.cars} />
        </div>
    )
}

export default CarTable;