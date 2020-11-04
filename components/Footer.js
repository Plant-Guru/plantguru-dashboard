import { makeStyles } from '@material-ui/core/styles';
import Link from '../components/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    listInline: {
        listStyleType: 'none',
        padding: 0
    },
    listItemInline: {
        display: 'inline-block',
        margin: '0 5px'
    },
    footer: {
        padding: '15px 0',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: '#222222'
    },
}));
export default function Footer() {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.footer}>
            <Container>
                <footer>
                    <div className="container">
                        <p>{new Date().getFullYear()} © Plant Guru. All Rights Reserved.</p>
                        <ul className={classes.listInline}>
                            <li className={classes.listItemInline}><Link color="inherit" href="/privacy">Privacy</Link></li>
                            <li className={classes.listItemInline}><Link color="inherit" href="/imprint">Imprint</Link></li>
                        </ul>
                    </div>
                </footer>
            </Container>
        </Grid>
    )
}