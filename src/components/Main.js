import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, makeStyles, createStyles } from '@material-ui/core';
import AppBar from './AppBar'

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	}),
);

const Main = () => {

	const classes = useStyles();
	return (
		<div>
			{/* <Container maxWidth="sm">
				<SimpleCard></SimpleCard>
			</Container>
			<Container fixed>
				<SimpleCard></SimpleCard>
			</Container> */}
			{/* <AutoGrid links={[1, 2, 3]}></AutoGrid> */}
			<AppBar />

			<Grid container spacing={3}>
				<Grid item xs>
					<Paper className={classes.paper}><Link to="/content">Content</Link></Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.paper}><Link to="/madeWithLove">Made with love</Link></Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.paper}><Link to="/appBar">AppBar</Link></Paper>
				</Grid>
			</Grid>

		</div>
	);
}

export default Main;
