import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0} // cero para que no haya espacio entre ls hijos
      direction="column" //implicitamente es como ponerle flexbox
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }} //StyledExtended (con sx tenemos acceso al tema que definimos en nuestro theme provider)
    >

      <Grid
        container
        direction='row'
        justifyContent='center'
      >
        <CircularProgress color='warning'/>
      </Grid>
    </Grid>
  )
}
