import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const Addcar = (props) => {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand:'', model:'', color:'', fuel:'', year:'', price:''
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInputChanged = (e) =>{
        setCar({...car, [e.target.name]: e.target.value})
    }

    const addCar = () =>{
        props.saveCar(car);
        handleClose();
        setCar({
            brand: '', model: '', color: '', fuel: '', year: '', price: ''
        });
    }
     return (
        <div>
            <Button style={{margin:10}} variant="contained" color="primary" onClick={handleClickOpen}>
                Add car
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Car</DialogTitle>
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
                    <Button onClick={addCar} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Addcar;