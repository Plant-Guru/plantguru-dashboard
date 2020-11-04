
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';

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

export default function Imprint() {
    const classes = useStyles();
    return (
        <Box>
            <Header />
            <Grid container>
                <Grid item xs={12} className={classes.grayBackground}>
                    <Container>
                        <h1>Imprint</h1>
                        <p>Information in accordance with Section 5 TMG</p>
                        <p>Sebastain Grebe<br/>Brückweg 18<br/>52146 Würselen<br/></p>
                        <h2>Contact Information</h2>
                        <p>Telephone: +4915170170240<br/>E-Mail: <a href="mailto:sebigrebe@gmail.com">sebigrebe@gmail.com</a><br/>Internet address: <a href="plant-guru.com" target="_blank">plant-guru.com</a><br/></p>
                        <h2>Disclaimer</h2>
                        Accountability for content<br/>
                        The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
                        accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for 
                        our own content on these web pages. In this matter, please note that we are not obliged to monitor 
                        the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. 
                        Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per 
                        §§ 8 to 10 of the Telemedia Act (TMG).

                        <br/><br/>Accountability for links<br/>
                        Responsibility for the content of 
                        external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were 
                        evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective 
                        link immediately.<br/><br/>Copyright<br/> Our web pages and their contents are subject to German copyright law. Unless 
                        expressly permitted by law, every form of utilizing, reproducing or processing 
                        works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. 
                        Individual reproductions of a work are only allowed for private use. 
                        The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
                        <br/><br/>
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
