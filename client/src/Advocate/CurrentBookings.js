import React, { Component } from 'react';
import women from "../img/53-.jpg";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link, withRouter } from 'react-router-dom';
import Add from '@material-ui/icons/AddCircleOutline';
import People from '@material-ui/icons/People'
import HostInfo from './HostInfo';
import { HostData } from '../filter';

const styles = theme => ({
    root: {
      flexGrow: 1
    },
    bookings: {
        height: window.innerHeight,
        width: window.innerWidth / 2 + 230,
    },
    bigAvatar: {
        position: "relative",
        width: window.innerWidth / 4,
        height: window.innerHeight / 4 ,
    },
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        maxWidth: 500,
        margin: "0rem 5rem 1rem 3rem",
        border: "0.5px solid #d3dbee",
        boxShadow: "none",
        fontFamily: 'Source Sans Pro',
        borderRadius: "12px"
    },
    content: {
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        fontFamily: 'Source Sans Pro',
        color: "#202e56"
        
    },
    button: {
        width: '220px',
        margin: '0.3rem',
        background: '#202e57',
        textDecoration: 'none',
        boxShadow: "none",
        fontWeight: 400,
        textTransform: "none",
        fontFamily: 'Source Sans Pro',
        fontSize: '14pt',
    },
    cardContent:{
        fontFamily: 'Source Sans Pro',
        color: '#202e57',
        fontWeight: 300
    }
  });

  const INITIAL_STATE = {
       user: null,
       bookings: [
                {
                    ID: 3857,
                    name: "Stephanie Burd",
                    advocate: "Erika Wu",
                    address: "1234 24th Sunset Bld",
                    location: "QUEEN ANNE",
                    begin: "MONDAY, APRIL 4",
                    end: "FRIDAY, APRIL 25"
                }
                // {
                //     ID: 7394,
                //     name: "Min Yang",
                //     advocate: "Sarah Lee",
                //     address: "1234 24th Sunset Bld",
                //     location: "BEACON HILL",
                //     begin: "WEDNESDAY, MAY 25",
                //     end: "TUESDAY, APRIL 30"
                // },
                // {
                //     ID: 3924,
                //     name: "Mary Huibregtse",
                //     advocate: "Emily Liu",
                //     address: "1234 24th Sunset Bld",
                //     location: "GREENLAKE",
                //     begin: "MONDAY, APRIL 4",
                //     end: "TUESDAY, APRIL 25"
                // },
                // {
                //     ID: 2384,
                //     name: "Abby Huang",
                //     advocate: "Alice Lopez",
                //     address: "1234 24th Sunset Bld",
                //     location: "FREMONT",
                //     begin: "MONDAY, APRIL 4",
                //     end: "TUESDAY, APRIL 25"
                // },
                
            ]
  }
class AdminDash extends Component {
    constructor(props) {
        super(props);    
        this.state = { ...INITIAL_STATE };

    }
    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user.displayName) {
                console.log(user.displayName)
                this.setState({
                    
                    user: user.displayName
                })
            } else {
                this.setState({
                    user: "Advocate"
                })
            }
        })
        
    }

    handleCardClick = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        console.log("Inside render")
        const { classes } = this.props;
        console.log(this.state.user)

        return (
            <div class="pt-4">
                <Grid 
                    container 
                    className={classes.root} 
                    justify="space-evenly" >
                        <Grid key={1} item>
                            <Grid 
                                container 
                                justify="center" 
                                alignItems="center">
                                <Paper id="side" style={{boxShadow: "none", border:"0.5px solid #d3dbee", backgroundColor: "#fdfdfe", borderRadius: "12px"}} >
                                    <img src={women} className={classes.bigAvatar} />
                                    <h4 style={{fontWeight: 300}}>Welcome, Advocate</h4>
                                    <Typography class="m-2 mb-3" color="textSecondary" style={{fontWeight: 300}}>What would you like to do today?</Typography>
                                    <Link to="/bookings">
                                        <Button variant="contained" color="primary" className={classes.button} id="button">
                                        <Add></Add>
                                            New Booking
                                        </Button>
                                    </Link>
                                    <Link to="/bookings">
                                        <Button variant="contained" color="primary" className={classes.button} id="button">
                                            Refer a Host
                                        </Button>
                                    </Link>
                                    <Link to="/bookings">
                                    <Button variant="contained" color="primary" className={classes.button} id="button">
                                    <People></People>
                                        Current Bookings
                                    </Button>
                                    </Link>
                                    <Link to="/bookings">
                                        <Button variant="contained" color="primary" className={classes.button} id="button">
                                            View Analytics
                                        </Button>
                                    </Link>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.bookings} style={{boxShadow: "none", border:"0.5px solid #d3dbee", backgroundColor: "#fdfdfe", borderRadius: "12px"}} >
                                <h4 class="pl-5 pt-5 pb-2">
                                    CURRENT BOOKINGS
                                </h4>
                                <Grid container spacing={3}>
                                    {HostData.map(
                                        (booking) => {
                                            return(
                                                <Grid item xs={6}>                                  
                                                    <Card className={classes.card} onClick={this.handleCardClick}>
                                                        <CardContent className={classes.content}>
                                                            <div>
                                                                <Typography className={classes.cardContent} style={{maxWidth: 200, fontSize: '14pt'}}>
                                                                    <strong style={{fontWeight: 500}}>Host:</strong> {booking.information.name}
                                                                </Typography>
                                                                <Typography className={classes.cardContent} style={{fontSize: '12pt'}}>
                                                                    <strong style={{fontWeight: 500}}>Guest #:</strong> {booking.space[0].guestID}
                                                                </Typography> 
                                                                <Typography className={classes.cardContent} style={{fontSize: '12pt'}}>
                                                                    <strong style= {{fontWeight: 500}}>Advocate:</strong> {booking.advocate}
                                                                </Typography>
                                                            </div>     
                                                            <div>
                                                                <div style={
                                                                        {
                                                                            //background: "#202e57", 
                                                                            borderRadius: '10px', 
                                                                            //border: '.5px solid #202e57',
                                                                            color: '#202e57', 
                                                                            padding: '.5rem',
                                                                            //margin: "7px"
                                                                            marginBottom: '7px'
                                                                        }
                                                                    }>
                                                                    {booking.space[0].begin} - <br/>{booking.space[0].end}
                                                                </div>
                                                                <Typography style={{color:'#da5c48', float:'right', fontSize: '12pt'}}>
                                                                    {booking.space[0].location}
                                                                </Typography>
                                                            </div>                                                                                                          
                                                        </CardContent>
                                                    </Card>
                                                    <HostInfo booking={booking} open={this.state.open} click={this.handleCardClick}></HostInfo>    
                                                </Grid>
                                            )
                                        }
                                    )}
                                </Grid>
                            </Paper>
                        </Grid>
                </Grid>
            </div>       
        )
    }

}
const Dash = compose(
    withRouter, 
    withStyles(styles),
    withFirebase,
)(AdminDash);

export default Dash;
