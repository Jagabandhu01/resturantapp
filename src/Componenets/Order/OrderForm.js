import { Grid } from "@material-ui/core";
import React from "react";


import Form from "../../layouts/Form"

export default function OrderForm(){
    return(
        <Form>
            <Grid container>
                <Grid item x6={6}></Grid>
                <Grid item x6={6}></Grid>
            </Grid>
        </Form>
    )
}