import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";



const formData = {
  email: 'avelino.caccia@gmail.com',
  password: '123',
  displayName: 'avelino cacciavillani'
}

const formValidations = { 
  email: [(value) => value.includes('@') ,' El correo debe tener una @'],
  password: [(value) => value.length >= 6 ,' El password debe tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1 ,' El campo es obligatorio']
}

export const RegisterPage = () => {

  const { displayName ,email, password, onInputChange, formState,
          isFormValid, enailValid, passwordValid, displayNameValid
  } = useForm(formData, formValidations)
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }



  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={ onInputChange }
              error={ !displayNameValid }
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
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
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
