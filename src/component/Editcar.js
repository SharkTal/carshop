import React from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const Editcar = (props) => {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    })

    const handleClickOpen = () => {
        console.log(props.car)
        setCar({ brand: props.car.brand, model: props.car.model, 
                color: props.car.color, fuel: props.car.fuel, 
                year: props.car.year, price: props.car.year})
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInputChanged = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value })
    }

    const updateCar = () => {
       props.updateCar(car, props.car._links.car.href)
        handleClose();
        
    }
    return (
        <div>
            <Button style={{ margin: 10 }} variant="contained" color="primary" onClick={handleClickOpen}>
                Edit
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange={e => handleInputChanged(e)}
                        label="Brand"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={e => handleInputChanged(e)}
                        label="Model"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={e => handleInputChanged(e)}
                        label="Color"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={e => handleInputChanged(e)}
                        label="Year"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange={e => handleInputChanged(e)}
                        label="Fuel"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={e => handleInputChanged(e)}
                        label="Price"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={updateCar} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Editcar;