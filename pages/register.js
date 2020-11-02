
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import Mailchimp from 'react-mailchimp-form'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '40px',
        textAlign: 'center',
        marginBottom: '10px'
    },
    titleSubText: {
        fontSize: '20px',
        textAlign: 'center',
        display: 'block',
        marginBottom: '20px'
    },
    titleContainer: {
        margin: '20px 0'
    },
    grayBackground: {
        backgroundColor: '#f0f0f0',
        padding: '20px'
    },
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
    },
}));

export default function Index() {
    const classes = useStyles();
    return (
        <Box>
            <Header />
            <Grid container>
                <Grid item xs={12} className={classes.grayBackground}>
                    <Container>
                        <Box className={classes.titleContainer}>
                            <Typography variant="h1" className={classes.title}>Newsletter</Typography>
                            <Typography variant="h2" className={classes.titleSubText}>Get notified when we officially launch!</Typography>
                            <Mailchimp
                                action='https://gmail.us2.list-manage.com/subscribe/post?u=1e4f1477920b53ab1ccb398fb&amp;id=bd16662d51'
                                fields={[
                                    {
                                        name: 'EMAIL',
                                        placeholder: 'Email',
                                        type: 'email',
                                        required: true,
                                    }
                                ]}
                                className="mailchimp"
                            />
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.ctaContainer}>
                    <Container>
                        <Typography variant="h2" className={classes.ctaMessage}>Stop waiting.<br/>Start growing.</Typography>
                    </Container>
                </Grid>
                <Footer />
            </Grid>
        </Box>
    );
}