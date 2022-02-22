import React from "react";
import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";
import AELogo from "../../img_ae_logo_c_230.png";

const useStyles = makeStyles(() => ({
    root: {
        background: "white",
        color: "white",
        borderBottom: "solid #4a84b1 2px"
    },
    title: {
        color: "#0056a3"
    },
    logo: {
        maxWidth: "65px",
        maxHeight: "65px"
    }
}));

export default function Header({ title }) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="relative" className={classes.root} elevation={3}>
                <Toolbar>
                    <IconButton
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        edge="start"
                        aria-label="menu"
                    >
                        <img src={AELogo} alt="logo" className={classes.logo} />
                    </IconButton>
                    <RouterLink to="/">
                        <Typography
                            align="left"
                            variant="h5"
                            aria-label="title"
                            className={classes.title}
                        >
                            {title}
                        </Typography>
                    </RouterLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
