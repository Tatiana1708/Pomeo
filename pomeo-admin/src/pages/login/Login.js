import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';

import { login } from "../../utils/api/authRequest";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// async function loginUser(credentials) {
//   return fetch('http://localhost:3001/api/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

export default function Signin() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); //Test@éàç

  const handleSubmit = async e => {
    window.location.href = "/home";
    e.preventDefault();
    const response = await login({
      email,
      password
    });
    window.location.href = "/home";
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/home";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={7} className={classes.image} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          Accès à l'admin Pomeo
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

// import React, { Component } from "react";
// import CheckButton from 'react-validation/build/button';

// import AuthService from "../../utils/services/authService";
// import './Login.css';



// function Login() {
  
//       const [onChangeEmail, set] = this.onChangeEmail.bind(this);
//       this.onChangePassword = this.onChangePassword.bind(this);

//       this.state = {
//         email: "",
//         password: "",
//         loading: false,
//         message: ""
//       };

//       const onChangeEmail = (e) => {
//         this.setState({
//           email: e.target.value
//         });
//       };
  
//       const onChangePassword = (e) => {
//         this.setState({
//           password: e.target.value
//         });
//       };
  
//       const handleLogin = (e) => {
//         e.preventDefault();
  
//         this.setState({
//           message: "",
//           loading: true
//         });
  
//         this.form.validateAll();
  
//         if (this.checkBtn.context._errors.length === 0) {
//           AuthService.login(this.state.email, this.state.password).then(
//             () => {
//               this.props.router.navigate("/home");
//               window.location.reload();
//             },
//             error => {
//               const resMessage = (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//                 error.message ||
//                 error.toString();
  
//               this.setState({
//                 loading: false,
//                 message: resMessage
//               });
//             }
//           );
//         } else {
//           this.setState({
//             loading: false
//           });
//         }
//       };


//     return (
//       <main className="main-content">
//         <form className="connexion-form" onSubmit={handleLogin}
//           ref={c => { this.form = c; } }>
//           <h1>Accès à l'admin Pomeo</h1>
//           <div className="inputfield-group">
//             <label htmlFor="email">Adresse email</label>
//             <input id="email" type="email" name="email" placeholder="nyo@pomeoapp.com"
//               value={this.state.email} onChange={onChangeEmail} />
//           </div>

//           <div className="inputfield-group">
//             <label htmlFor="password">Mot de passe</label>
//             <input id="password" type="password" name="password" placeholder="Blablabla"
//               value={this.state.password} onChange={onChangePassword} />
//           </div>
//           {/* <button type="submit" onClick={loginUser}>Entrer</button> */}
//           <div className="form-group">
//             <button
//               className="btn btn-primary btn-block"
//               disabled={this.state.loading}
//             >
//               {this.state.loading && (
//                 <span className="spinner-border spinner-border-sm"></span>
//               )}
//               <span>Entrer</span>
//             </button>
//           </div>
//           {this.state.message && (
//             <div className="form-group">
//               <div className="alert alert-danger" role="alert">
//                 {this.state.message}
//               </div>
//             </div>
//           )}
//           <CheckButton
//             style={{ display: "none" }}
//             ref={c => {
//               this.checkBtn = c;
//             } } />
//         </form>
//       </main>
//     );
// }

//   export default Login;