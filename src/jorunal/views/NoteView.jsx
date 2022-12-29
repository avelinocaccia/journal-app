import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'> 28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}}>
                <SaveOutlined sx={{mr: 2, fontSize: 30}} />
                Guardar
            </Button>
        </Grid>

        <Grid container sx={{mt: 4}}>
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingresar titulo'
                label='Título'
                sx={{ border: 'none', mb:1 }}

            />
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Que sucedio en el dia de hoy?'
                sx={{ border: 'none', mb:1 }}
                minRows={5}

            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
