import { Link as RouterLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { starCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";



const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = { 
  email: [(value) => value.includes('@') ,' El correo debe tener una @'],
  password: [(value) => value.length >= 6 ,' El password debe tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1 ,' El campo es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector( state => state.auth )
  const isChekingAuthentication = useMemo ( () => status === 'checking', [status] )
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { displayName ,email, password, onInputChange, formState,
          isFormValid, emailValid, passwordValid, displayNameValid
  } = useForm(formData, formValidations)
  
  
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(starCreatingUserWithEmailPassword(formState))
    
  }



  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={ onInputChange }
              error={!!displayNameValid && formSubmitted }
              helperText={ displayNameValid}
            />
          </Grid>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@example.com"
              fullWidth
              name="email"
              value={email}
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted}
              helperText={ emailValid }
            />
          </Grid>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted}
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            
            <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none'}>
                <Alert severity="error">
                  {errorMessage}
                </Alert>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Button 
                disabled= { isChekingAuthentication }
                variant="contained" 
                fullWidth
                type="submit"
                >
                Crear cuenta
              </Button>
            </Grid>
            
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr: 2}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
