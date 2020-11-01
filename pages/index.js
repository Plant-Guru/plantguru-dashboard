
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../components/Link';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EcoIcon from '@material-ui/icons/Eco';
import HomeIcon from '@material-ui/icons/Home';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  hero: {
    background: 'url(/greenhouse2.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    color: '#fff',
    height: 'calc(100vh - 64px)'
  },
  heroMessage: {
    fontSize: '50px',
  },
  whiteColor: {
    color: '#fff'
  },
  yMargin: {
    marginBottom: 'auto',
    marginTop: 'auto'
  },
  xMargin: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  fill: {
    height: '100%'
  },
  deviceContainer: {
    maxWidth: '325px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  downloadContainer: {
    padding: '150px 0',
    color: '#fff',
    background: 'linear-gradient(#8BA910, #006f02)'
  },
  downloadMessage: {
    fontSize: '70px',
    lineHeight: '1.2',
    textAlign: 'center',
    margin: 0
  },
  grayBackground: {
    backgroundColor: '#f0f0f0',
    padding: '20px'
  },
  breakContainer: {
    margin: '20px'
  },
  breakText: {
    fontSize: '40px',
    margin: '5px',
    color: '#3c4b64'
  },
  subBreakText: {
    width: '100%',
    display: 'block',
    marginBottom: '20px',
    color: '#3c4b64'
  },
  featureTitle: {
    fontSize: '30px',
    color: '#3c4b64'
  },
  featureText: {
    color: '#3c4b64',
  },
  featureIcon: {
    width: '100%',
    textAlign: 'center',
    fontSize: '80px',
    display: 'block',
    marginBottom: '15px',
  },
  featureItem: {
    padding: '50px 20px',
    textAlign: 'center'
  },
  featureContainer: {
    margin: '50px 0'
  },
  hr: {
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
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
  footer: {
    padding: '25px 0',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: '#222222'
  },
  listInline: {
    listStyleType: 'none',
    padding: 0
  },
  listItemInline: {
    display: 'inline-block',
    margin: '0 5px'
  }
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid item xs={12} className={classes.hero}>
          <Container className={classes.fill}>
            <Grid container className={classes.fill}>
              <Grid item lg={7} xs={12} className={classes.yMargin}>
                <div className="header-content mx-auto">
                  <h1 className={classes.heroMessage}>Grow any kind of plant efficiently with Plant Guru!</h1>
                  <Button variant="contained" color="primary" className={classes.whiteColor} component={Link} href="/register">Start Now!</Button>
                </div>
              </Grid>
              <Grid item lg={5} xs={12} className={classes.yMargin}>
                <div className={classes.deviceContainer}>
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        <img src="/plant.jpg" className={classes.fill} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} className={classes.downloadContainer}>
          <Container>
            <Grid container className={classes.fill}>
              <Grid item xs={8} className={classes.xMargin}>
                <h2 className={classes.downloadMessage}>Install your device and start growing!</h2>
                <p>With our combination of a intelligent device infrastructure, dashboard and mobile app you can easily grow your veggies at home!</p>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} className={classes.grayBackground}>
          <Container>
              <div className={classes.breakContainer}>
                  <Typography variant="h2" align="center" className={classes.breakText}>{'Plant Guru brings a load of great features to grow your plants!'}</Typography>
                  <Typography align="center" className={classes.subBreakText}>{'Check out what you are able to accomplish!'}</Typography>
                  <hr className={classes.hr} />
              </div>
              <Grid container className={classes.featureContainer}>
                <Grid item xs={12} lg={4} className={classes.yMargin}>
                  <div className={classes.deviceContainer}>
                    <div className="device-mockup iphone6_plus portrait white">
                      <div className="device">
                        <div className="screen">
                          <img src="/plant.jpg" className={classes.fill} alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={8} xs={12} className={classes.yMargin}>
                  <Grid container>
                    <Grid item xs={6} className={classes.featureItem}>
                      <HomeIcon className={classes.featureIcon} color="primary" />
                      <Typography variant="h3" className={classes.featureTitle} align="center">Multiple Greenhouses</Typography>
                      <p className="text-muted">Deploy and grow multiple indoor greenhouses controlled by PlantGuru!</p>
                    </Grid>
                    <Grid item xs={6} className={classes.featureItem}>
                      <EcoIcon className={classes.featureIcon} color="primary" />
                      <Typography variant="h3" className={classes.featureTitle} align="center">Multiple Plant Species</Typography>
                      <p className="text-muted">Grow a huge combination of plant species in one greenhouse!</p>
                    </Grid>
                    <Grid item xs={6} className={classes.featureItem}>
                      <WbSunnyIcon className={classes.featureIcon} color="primary" />
                      <Typography variant="h3" className={classes.featureTitle} align="center">Environmental Control</Typography>
                      <p className="text-muted">PlantGuru controls all environmental statuses like moisture and light for you!</p>
                    </Grid>
                    <Grid item xs={6} className={classes.featureItem}>
                      <CodeIcon className={classes.featureIcon} color="primary" />
                      <Typography variant="h3" className={classes.featureTitle} align="center">Open Source</Typography>
                      <p className={classes.featureText}>You can see the raw code but also enjoy the paid service we provide!</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.ctaContainer}>
          <Container>
            <Typography variant="h2" className={classes.ctaMessage}>Stop waiting.<br/>Start growing.</Typography>
            <Button variant="contained" color="primary" className={classes.whiteColor} component={Link} href="/register">Let's Get Started!</Button>
          </Container>
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <Container>
            <footer>
              <div className="container">
                <p>{new Date().getFullYear()} © PlantGuru. All Rights Reserved.</p>
                <ul className={classes.listInline}>
                  <li className={classes.listItemInline}><Link color="inherit" href="#">Privacy</Link></li>
                  <li className={classes.listItemInline}><Link color="inherit" href="#">Terms</Link></li>
                  <li className={classes.listItemInline}><Link color="inherit" href="#">FAQ</Link></li>
                </ul>
              </div>
            </footer>
          </Container>
        </Grid>
    </Box>
  );
}