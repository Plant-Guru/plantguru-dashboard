import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    menuButton: {},
    title: {},
    logo: {
        verticalAlign: 'middle',
        maxHeight: '60px',
        paddingRight: '10px',
    },
    fullLogo: {
        flexGrow: 1
    },
    whiteColor: {
        color: '#fff'
    },
    link: {
        color: '#fff',
        padding: '0 5px',
    },
    middle: {
        verticalAlign: 'middle',
    },
    linkText: {
        verticalAlign: 'middle',
        paddingLeft: '5px',
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Container disableGutters={true}>
                <Toolbar className={classes.whiteColor}>
                    <Typography variant="h6" className={classes.fullLogo}><img className={classes.logo} src="/logo.png"/>{'Plant Guru'}</Typography>
                    <Button><Link href="https://github.com/Plant-Guru" className={classes.link} target={'_blank'}>
                        <GitHubIcon className={classes.middle} />
                        <span className={classes.linkText}>{'Github'}</span>
                    </Link></Button>
                    <Button color="inherit">{'Login'}</Button>
                    <Button color="inherit">{'Register'}</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}