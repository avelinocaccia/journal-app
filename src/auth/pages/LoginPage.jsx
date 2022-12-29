import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";




export const LoginPage = () => {

  const dispatch = useDispatch()
  const { status } = useSelector( state => state.auth)

  const { email, password, onInputChange} = useForm({
    email: 'gfdsg',
    password: 'gfdsgfd'
  })

  const isAuthenticating = useMemo( () => status === 'checking', [status])


  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    console.log('google');
    dispatch(startGoogleSignIn()) 
  }


  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@-----.com"
              fullWidth
              name='email'
              value={email}
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="conteaseña"
              fullWidth
              name='password'
              value={password}
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={ isAuthenticating }
                type="submit" 
                onClick={onSubmit}
                variant="contained"   
                fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                onClick={onGoogleSignIn} 
                variant="contained" 
                fullWidth
                >
                <Google />
                <Typography sx={{ ml: 2 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
