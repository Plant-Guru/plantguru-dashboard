
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '../components/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterHero from '../components/FooterHero';
import { useState } from 'react';
import axios from '../helpers/axios';
import Message from '../components/Message';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  messageContainer: {
    marginBottom: theme.spacing(2),
  }
}));

export default function Register() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [messages, setMessages] = useState([]);

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(password_confirmation);
    axios.post('registration', {
      email,
      password,
      password_confirmation
    }).then((response) => {
      console.log(response);
      // @todo check response and show message
    }, (error) => {
      // @todo show error
      console.log(error);
      let alerts = JSON.parse(JSON.stringify(messages));
      alerts.shift();
      alerts.push({
        text: error.message,
        level: 'error'
      });
      setMessages(alerts);
    });
  };

  return (
    <Box>
        <Header />
        <Grid container>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                    <Typography component="h1" variant="h5">Register</Typography>
                    <form className={classes.form} noValidate onSubmit={onFormSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={e => { setEmail(e.target.value) }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => { setPassword(e.target.value) }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password_confirmation"
                            label="Confirm Password"
                            type="password"
                            id="password_confirmation"
                            autoComplete="current-password"
                            value={password_confirmation}
                            onChange={e => { setPasswordConfirmation(e.target.value) }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {"Register"}
                        </Button>
                        <div className={classes.messageContainer}>
                          {messages.map(message => (
                            <Message level={message.level} text={message.text} />
                          ))}
                        </div>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgot_password" variant="body2">{"Forgot password?"}</Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signin" variant="body2">{"Already have an account? Sign In"}</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            <FooterHero showCtaButton={false} />
            <Footer />
        </Grid>
    </Box>
  );
}