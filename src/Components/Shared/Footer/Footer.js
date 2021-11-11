import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';
import footerImg from '../../../images/foot.jpg'


const footerBg = {
    background: `url(${footerImg})`
}

const Footer = () => {
    return (
        <div>
            <footer class="footer-style" >
                <Grid container spacing={3} style={footerBg}>

                    <Grid item xs={12} md={6}>
                        <Typography>
                            IT'S EASY TO FIND US
                            <p class="footer-para">Real Estate agents are Property consisting of land and the buildings on it, along with its seds naturals resources such seds as crops, minerals, or water</p>

                            <div>
                                <div class="add-phn-em-style">
                                    <i class="fas fa-map-marker-alt icon-style"></i> ADDRESS
                                    <p>630 San Diego,Los Angeles,CA</p>
                                </div>
                                <div class="add-phn-em-style">
                                    <i class="fas fa-phone-alt icon-style"></i> PHONE
                                    <p>+8801145879341</p>
                                </div>
                                <div class="add-phn-em-style">
                                    <i class="fas fa-envelope-open-text icon-style"></i> EMAIL
                                    <p>info@unitedproperty.com</p>
                                </div>
                            </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <form >
                            <TextField
                                sx={{ mx: 1, width: '30%', color: 'primary.main' }}
                                id="outlined-multiline-flexible"
                                label="Name"
                                name="name"
                                multiline
                                required
                                maxRows={4}
                            />
                            <TextField
                                sx={{ mx: 1, width: '30%' }}
                                id="outlined-multiline-flexible"
                                label="Email"
                                name="email"
                                multiline
                                required
                                maxRows={4}
                            />
                            <br />
                            <TextField
                                sx={{ width: '62%', m: 1 }}
                                id="outlined-multiline-flexible"
                                label="Subject"
                                multiline
                                maxRows={4}
                            />
                            <br />

                            <TextField
                                sx={{ mx: 1, width: '62%' }}
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                            />
                            <Button sx={{ width: '62%', m: 1, color: 'white', background: "transparent" }} type="submit" variant="contained" >
                                SEND
                            </Button>
                        </form>
                        <Grid item xs>
                            <div class="icons">
                                <i class="fab fa-facebook-square"></i>
                                &nbsp;
                                <i class="fab fa-twitter-square"></i>
                                &nbsp;
                                <i class="fab fa-linkedin"></i>
                                &nbsp;
                                <i class="fab fa-youtube-square"></i>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
            </footer>
        </div>
    );
};

export default Footer;