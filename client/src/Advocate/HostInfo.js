import React, { Component } from 'react';
import bedroom from "../img/bedroom.jpg";
import { Host } from '../filter';
import { 
    Button, 
    withStyles, 
    TextField, 
    MenuItem, 
    Grid, 
    FormControl, 
    FormControlLabel, 
    Checkbox,
    Dialog, DialogActions, 
    DialogContent, 
    DialogContentText 
} from '@material-ui/core/';

import { PersonalSelect } from '../Select'
import { Needs } from '../filter';
// import Map from './Map'

// firebase
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

const styles = theme => ({
    img: {
        height: '700px',
    },
    contact: {
        width: '600px'
    },
    button: {
        margin: theme.spacing.unit,
    },
    filter: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        //marginRight: theme.spacing.unit * 2,
        width: "50%",
    },
    input: {
        border: "0.5px solid "   
    },
    insideContent: {
        padding: "20px"
    },
    tag: {
        color: "#202e57", 
        border: ".5px solid #202e57", 
        maxWidth: "150px",
        borderRadius: "10px",
        textAlign: "center",
        padding: "6px",
        //paddingTop: "6px"
        marginRight: "10px",
        marginTop: "10px",
        marginBottom: "10px"
    }, 
    body: {
        color: "#202e57",
        fontWeight: 300,
        fontSize: "14px"
    },
    title: {
        color: "#202e57",
        fontWeight: 400,
        fontSize: "18px"
    },
    contact: {
        border: ".5px solid #7e9fa8",
        padding: "5px"
    },
    floatingLabelFocusStyle: {
        color: "#da5c48"
    }
})


class BookingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            booking: {},
            guest: '',
        }
    }

    handleInputChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log(this.state)
    };


    handleCloseHost = () => {
        this.setState({ confirm: false });
        this.props.click();
    };

    handleConfirmHost = () => {
        this.setState({
            confirm: true
        })
    }

     render() {
        const { classes, type } = this.props;
        let host = this.props.booking;
        console.log(host)
        if (host === undefined || host == "") {
            host = {
                email: "mary@gmail.com",
                end: 1559520143997,
                ethnicities: ["White"],
                firstName: "Mary",
                gender: "Female",
                hostID: "61TAiL7K1vXy254SB1iekWo1KWk2",
                lastName: "Huibregtse",
                listingData: {
                    address: "2525 minor Ave E",
                    amenities: ["Kitchen", "Parking", "Bike Storage"],
                    description: "hello",
                    guest: 3,
                    hostID: "zSrR3ts6r4cM9z1LG2TyW26uVR42",
                    houseRules: ["No Smoking", "No Alcohol"],
                    id: "-Lg9OGG55kjo4HuwA1B9",
                    checkIn: "",
                    checkOut: "",
                    information: "world",
                    location: "Belltown",
                    name: "Listing A",
                    photos: "no photos currently",
                    type: "Hotel Room",
                    zip: "98102"
                },
                phone: "1234567890",
                religion: ["None"],
                start: 1559520143997,
                state: "available",
                story: "none given",
            }
        }
        let render = '';
        if (type === 'confirmed') {
            render = <p className={classes.tag} style={{backgroundColor: "#da5c48", color: "white", border: "none"}}>Booked</p>
        } else if (type === 'pending') {
            render = <p className={classes.tag} style={{backgroundColor: "#7e9fa8", color: "white", border: "none"}}>Pending</p>
        } else {
            render = <p className={classes.tag} style={{backgroundColor: "#48704d", color: "white", border: "none"}}>Available</p>
        }
        console.log(type)
        return(
            <div>

                <Dialog
                    open={this.props.open}
                    onClose={this.props.click}
                    scroll='paper'
                    fullWidth='false'
                    maxWidth='sm'
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogContent style={{padding: 0}}>
                        <img className={classes.img} src={bedroom} style={{width: "100%", height: "100%"}}></img>
                        {/* <Map /> */}
                        <div className={classes.insideContent}>
                        <h3>Home by {host.listingData.name}</h3>
                        <p style={{color: "#7e9fa8"}}>{host.location}</p>
                        <div style={{display: "flex"}}>
                                {/* Need to add here the availablity. If available, render this, else render the second one */}
                                {render}
                                <p className={classes.tag}>{host.listingData.type}</p>
                        </div>
                            <DialogContentText style={{display:"flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                                <p className={classes.body}>{host.listingData.description}</p>
                                <div>
                                    <b className={classes.body} style={{color:"#da5c48"}}>Address</b>
                                    <p className={classes.body}>{host.listingData.address}</p>
                                </div>
                            </DialogContentText>
                        <hr></hr>
                        <h5 className={classes.title}>HOST INFORMATION</h5>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div style={{paddingRight: "10px"}}>
                                <p className={classes.body}>
                                    <b>{host.firstName  + " " + host.lastName}</b>
                                </p>
                                <p className={classes.body} >{host.story}</p>
                            </div>
                            <div>
                                <p className={classes.body}><b style={{color:"#da5c48"}}>Languages:</b> English, Chinese</p>
                                <p className={classes.body}><b style={{color:"#da5c48"}}>Religion:</b> Christian</p>
                                <p className={classes.body}><b style={{color:"#da5c48"}}>Ethnicity: </b> Chinese</p>
                            </div>
                        </div>
                        <div style={{textAlign: "center", display: "flex", justifyContent: "center", marginTop: "5px"}}>
                            <p style={{flexGrow: "1"}} className={`${classes.contact} ${classes.body}`}>{host.phone}</p>
                            <p style={{flexGrow: "1"}} className={`${classes.contact} ${classes.body}`}>{host.email}</p>
                        </div>
                        <hr></hr>
                        <h5 className={classes.title}>AMENITIES</h5>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            host.listingData.amenities.map((data) => {
                                return( 
                                <div 
                                    id="tags"
                                    style={{
                                        border: "0.5px solid",
                                        borderRadius: '0.5rem',
                                        padding: '4px 12px 4px 12px',
                                        margin: '2px'
                                    }}
                                >
                                    {data}
                                </div>
                                )
                            })
                        }
                        </div>
                        <hr></hr>
                        <h5 className={classes.title}>CHECK-IN INFORMATION</h5>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className={classes.body} style={{paddingRight: "10px"}}>
                                {host.listingData.description}
                            </p>
                            <DialogContentText>
                                <p className={classes.body}><b>Time: </b> {host.listingData.checkIn} </p>                          
                            </DialogContentText>
                        </div>

                        <hr></hr>
                        <h5 className={classes.title}>HOUSE RULES</h5>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {
                                host.listingData.houseRules.map((data) => {
                                    return(
                                    <div 
                                        id="tags"
                                        style={{
                                            border: "0.5px solid #7e9fa8",
                                            borderRadius: '0.5rem',
                                            padding: '4px 12px 4px 12px',
                                            margin: '2px',
                                            color: "#7e9fa8"
                                        }}
                                    >
                                        {data}
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <hr></hr>
                        <h5 className={classes.title}>BOOKING INFORMATION</h5>
                        <FormControl class="">
                            <div> 
                                {/* Guest ID, StartEnd Date */}
                                <p className={classes.title} style={{fontSize: "16px"}}>GUEST INFORMATION</p>
                                <div style={{display: "flex"}}>
                                    <TextField
                                        id="standard-name"
                                        label="Guest ID"
                                        style={{marginRight: "10px"}}
                                        className={classes.textField}
                                        value={this.state.guestID}
                                        onChange={this.handleInputChange('guestID')}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        label="# of guests"
                                        className={classes.textField}
                                        value={this.state.guest}
                                        onChange={this.handleInputChange('guest')}
                                        SelectProps={{
                                            MenuProps: {
                                            className: classes.menu,
                                            },
                                        }}
                                        margin="normal"
                                        >
                                        {[1,2,3,4, 5, 6].map(option => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="date"
                                        label="Start Date"
                                        type="date"
                                        className={classes.textField}
                                        style={{marginRight: "10px"}}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: classes.floatingLabelFocusStyle
                                        }}
                                    /> 
                                    <TextField
                                        id="date"
                                        label="End Date"
                                        type="date"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: classes.floatingLabelFocusStyle
                                        }}
                                    /> 
                                </div>
                                
                                {/* Personal Information */}
                                <div style={{paddingRight: "100px"}}>
                                <PersonalSelect onSelect={() => console.log('')}></PersonalSelect>
                                </div>
                                
                                {/* NEEDS FIELD GOES HERE */}
                                <div class="mt-3">
                                    <p className={classes.title} style={{fontSize: "16px"}}>NEEDS</p>
                                    {
                                        Needs.values.map((need) => {
                                            return(
                                                <FormControlLabel control={<Checkbox value={need}/>} label={need}/>
                                            )
                                        })
                                    }
                                </div>
                                
                                {/* NOTES */}
                                <p className={classes.title} style={{fontSize: "16px"}}>NOTES</p>
                                <textarea style={{width: "100%"}}></textarea>
                                <Grid>

                            </Grid>
                            </div>
                        {/* </Grid> */}

                        </FormControl>
                        </div>
                    </DialogContent>
                    <DialogActions style={{display: "flex", justifyContent: "space-between", paddingRight: "20px", paddingLeft: "20px"}}>
                        {
                            type === 'confirmed' || type === 'pending' ?
                            <>
                            <Button onClick={this.props.click} variant="contained" id="buttonGray" id="button" color="primary">
                                Save
                            </Button>
                            <Button onClick={this.handleConfirmHost} variant="contained"  color="secondary" >
                                Cancel Booking
                            </Button> 
                            </>
                            :
                            <>
                            <Button onClick={this.props.click} variant="contained" id="buttonGray" style={{color: "white"}}>
                                Cancel
                            </Button>
                            <Button onClick={this.handleConfirmHost} variant="contained"  color="primary" id="button">
                                Confirm Host
                            </Button>
                            </>
                        }
                        
                    </DialogActions>
                    <Dialog
                        open={this.state.confirm}
                        onClose={this.props.click}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" class="pb-0">
                            Your booking is confirmed! 
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCloseHost} color="primary" id="button" style={{color: "white"}}>
                            Done
                            </Button>
                        </DialogActions>
                        </Dialog>
                </Dialog>
            </div>
        )
    }
}

const Bookings = compose(
    withStyles(styles),
    withFirebase,
  )(BookingForm);

  export default Bookings;