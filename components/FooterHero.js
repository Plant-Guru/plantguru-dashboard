import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ActiveLink from '../components/ActiveLink';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    ctaContainer: {
      padding: '250px 0',
      background: 'url(/greenhousefade.jpg) no-repeat center center fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
    ctaMessage: {
      fontSize: '80px',
      marginBottom: '20px',
      backgroundImage: 'linear-gradient(90deg, #8BA910, #006f02)',
      "-webkit-background-clip": 'text',
      "-webkit-text-fill-color": 'transparent'
    }
}));

export default function FooterHero(props) {
    const classes = useStyles();

    const { showCtaButton = true } = props;

    return (
        <Grid item xs={12} className={classes.ctaContainer}>
            <Container>
                <Typography variant="h2" className={classes.ctaMessage}>Stop waiting.<br/>Start growing.</Typography>
                {showCtaButton && <Button variant="contained" color="primary" className={classes.whiteColor}><ActiveLink href="/register">Let's Get Started!</ActiveLink></Button>}
            </Container>
        </Grid>
    );
}