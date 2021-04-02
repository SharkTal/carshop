import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import CarTable from './AntTable';
import Addcar from './Addcar';
import Editcar from './Editcar';
const Carlist = () => {
    const [cars, setCars] = useState([]);
    //const [link, setLink] = useState('')
    // const [isReady, setReady] = useState(false);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('http://carrestapi.herokuapp.com/cars')
            .then(res => res.json())
            .then(responseData => {
                // setReady(true)
                setCars(responseData._embedded.cars)
                // setLink(responseData._embedded.cars._links.self.href)
            })
            .catch(err => {
                "Check your code!"
            })
    }


    const deleteCar = (link) => {
        console.log(link);
        fetch(link, { method: 'DELETE' })
            .then(res => fetchData())
            .catch(err => console.error(err))
    }

    const saveCar = (car) => {
        fetch('http://carrestapi.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => fetchData())
            .catch(err => console.error(err))
    }

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => fetchData())
            .catch(err => console.error(err))
    }

    const columns = [
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            width: 150
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model'
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color'
        },
        {
            title: 'Fuel',
            dataIndex: 'fuel',
            key: 'fuel'
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Href',
            key: 'href',
            render: (cars) => (
                <a>{cars._links.car.href}</a>
            ),
            width: 100
        },
        // The edit part is noticeable
        {
            title: 'Action',
            key: '_links.car.href',
            render: row => <Editcar updateCar={updateCar} car={row} />
        },
        {
            title: 'Action',
            key: 'action',
            render: (cars) => (
                <Button onClick={() => deleteCar(cars._links.car.href)} type="primary" danger>Delete</Button>
            )
        },

    ]

    return (
        <div>
            <Addcar saveCar={saveCar} />
            <CarTable columns={columns} cars={cars} />
        </div>
    )
}

export default Carlist;