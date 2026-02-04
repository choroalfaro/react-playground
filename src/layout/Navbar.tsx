import { Box, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import CodeIcon from '@mui/icons-material/Code';
import ScienceIcon from '@mui/icons-material/Science';
import TerminalIcon from '@mui/icons-material/Terminal';
import JavascriptIcon from '@mui/icons-material/Javascript';

const Classes = {
    flexbox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    typography: {
        fontFamily: '"Source Code Pro", monospace'
    },
    iconsBox: {
        display: 'flex',
        alignItems: 'center',
    }

}
export default function Navbar() {
    return (
        <AppBar position='static'>
            <Toolbar sx={Classes.flexbox}>
                <Box sx={Classes.iconsBox}>
                    <CodeIcon />
                    <ScienceIcon />
                    <TerminalIcon />
                    <JavascriptIcon />
                </Box>
                <Box>
                    <Typography sx={Classes.typography}>
                        Andy's coding nook
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>)
}