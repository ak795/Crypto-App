import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { gql, useQuery } from '@apollo/client';
import Toolbar from '../component/toolbar';
import CustomTable from '../component/table';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        table: {
            marginTop: 50,
        }
    }),
);

const COINS_DATA = gql`
query Coins {
  coins {
      name
      symbol
      quote
  }
}
`;

function TableHeaders(): Array<string> {
    return ['name', 'symbol', 'price', 'volume (24h)', '% change (1d)']
}

function TableData(): Array<any> {
    const { loading, error, data } = useQuery(COINS_DATA);
    return data && data.coins;
}

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Toolbar />
            <main className={classes.content}>
                <div className={classes.table}>
                    <CustomTable header={ TableHeaders() } rows={ TableData() } />
                </div>
            </main>
        </div>
    )
}