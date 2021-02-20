import React from 'react'
import {Card, CardReader, CardContent, Typography} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2'

function Details() {
    return (
        <Card>
            <CardReader/>
            <CardContent>
                <Typography variant = 'h5' >$50</Typography>
                <Doughnut data="DATA"/>
            </CardContent>
        </Card>
    )
}

export default Details
