import '@/styles/App.css';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import DownloadingSharpIcon from '@mui/icons-material/DownloadingSharp';
import { Link } from 'react-router-dom';

export default function Header() {
    function handleDownloadResume() { console.log('GET SOME!') }
    return(
        <AppBar position="sticky" sx={{ backgroundColor: 'background.paper', borderBottom: '1px solid #7c3aed' }}>
      <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, color: 'primary.light' }}>
                    Morrison Creative Labs
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/projects">Projects</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/">Contact</Button>
                <Button color="inherit" component={Link} to="/resume">Resume</Button>
                <Button color="inherit" onClick={handleDownloadResume}>Download Resume <DownloadingSharpIcon/></Button>
                <Button color="inherit" component={Link} to="/play">Play</Button>
            </Toolbar>
        </AppBar>

    );
}