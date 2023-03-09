import { 
    Grid, 
    TextField 
} from "@mui/material";

function TeamEditForm() {
    return (
        <form>
             <Grid container spacing={7}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Username' placeholder='johnDoe' defaultValue='johnDoe' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Name' placeholder='John Doe' defaultValue='John Doe' />
                </Grid>
             </Grid>
        </form>
    );
}

export default TeamEditForm;