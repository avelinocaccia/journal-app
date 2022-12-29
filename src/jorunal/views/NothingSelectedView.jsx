import { CheckCircleOutline, StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0} // cero para que no haya espacio entre ls hijos
      direction="column" //implicitamente es como ponerle flexbox
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius:3}} //StyledExtended (con sx tenemos acceso al tema que definimos en nuestro theme provider)
    >
        <Grid item xs={12}>
          <CheckCircleOutline sx={{ fontSize: 100, color: 'white'}}/>
        </Grid>
        <Grid item xs={12}>
          <Typography color='white' variant="h5">Selecciona o crea una nota</Typography>
        </Grid>

    </Grid>
  )
}
