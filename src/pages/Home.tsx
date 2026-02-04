import { Typography } from "@mui/material";
import { Link } from 'react-router'
export function Home() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Home
            </Typography>
            <Typography>
                Welcome to the app.
            </Typography>
            <Link to='/square-nested-blocks'>Square nested blocks exercise</Link>
        </>
    );
}