import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Link as RouterLink } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    media: {
        height: "128px"
    },
    card: {
        backgroundColor: "#1769aa",
        height: "224px",
        position: "relative",
        color: "white",
        padding: "5px 0 0 5px",
        boxShadow: "0 0 2px 1px #834bff"
    },
    subheader: {
        position: "absolute",
        bottom: "25px",
        right: "30px",
        color: "white"
    },
    newCard: {
        backgroundColor: "none",
        height: "224px",
        borderStyle: "dotted",
        borderColor: "#1769aa",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default function PAWorkSpaceMainPage() {
    const classes = useStyles();

    // TODO: the data below is mock data, the real one should be fetched from backend API
    const workSpaces = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    return (
        <Box pt={8} pb={10}>
            <Container maxWidth="lg">
                <Box textAlign="left" mb={5}>
                    <Typography variant="h4" component="h2" gutterBottom={true}>
                        Your Workspaces
                    </Typography>
                    <Divider style={{ background: "#C4C4C4", height: "2px" }} />
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Box textAlign="center">
                    <Grid container spacing={4}>
                        {workSpaces.map(workspace => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    key={workspace.id}
                                    component={RouterLink}
                                    to="/"
                                >
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                align="left"
                                                style={{ color: "white" }}
                                            >
                                                WorkSpace {workspace.id}
                                            </Typography>
                                            <CardHeader
                                                classes={{
                                                    subheader: classes.subheader
                                                }}
                                                subheader={`Proposal #: ${workspace.id}`}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })}
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            component={RouterLink}
                            to="/"
                        >
                            <Card className={classes.newCard}>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        style={{ color: "#1769aa" }}
                                    >
                                        + New WorkSpace
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
