import {
    Avatar,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControl,
    FormControlLabel,
    makeStyles,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useAlert from "../../hooks/useAlert";
import AlertMessage from "../Common/AlertMessage";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    radioGroupFirst: {
        flexDirection: "row"
    },
    avatar: {
        margin: theme.spacing(1),
        background: "#0255a3"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        background: "#0255a3"
    }
}));

const employeeRole = {
    EMPLOYEE: "Employee",
    PROJECT_ADMINISTRATOR: "Project Administrator",
    SYSTEM_ADMINISTRATOR: "System Administrator"
};

export default function LoginPage() {
    const classes = useStyles();

    const alert = useAlert();

    const [role, setRole] = React.useState(`${employeeRole.EMPLOYEE}`);
    const [checked, setChecked] = useState(true);

    const onSubmit = e => {
        e.preventDefault();

        // TODO: this is the temporary solution for midterm progress only.
        alert.switchToFailure("Authentication Failed.");
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <FormControl component="fieldset">
                    <br />
                    <AlertMessage alertStatus={alert} />
                    <br />
                    <RadioGroup
                        aria-label="role"
                        name="role"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    >
                        <FormControlLabel
                            value={employeeRole.EMPLOYEE}
                            control={<Radio color="primary" />}
                            label={employeeRole.EMPLOYEE}
                        />
                        <FormControlLabel
                            value={employeeRole.PROJECT_ADMINISTRATOR}
                            control={<Radio color="primary" />}
                            label={employeeRole.PROJECT_ADMINISTRATOR}
                        />
                        <FormControlLabel
                            value={employeeRole.SYSTEM_ADMINISTRATOR}
                            control={<Radio color="primary" />}
                            label={employeeRole.SYSTEM_ADMINISTRATOR}
                        />
                    </RadioGroup>
                </FormControl>
                <form className={classes.form} onSubmit={onSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="remember"
                                color="primary"
                                checked={checked}
                                onChange={() => {
                                    setChecked(!checked);
                                }}
                            />
                        }
                        label="Remember me"
                        style={{ float: "left" }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}
