import "@/styles/app.css";
import { AppBar, Button, Toolbar, Tooltip, Typography } from "@mui/material";
import DownloadingSharpIcon from "@mui/icons-material/DownloadingSharp";
import { Link } from "react-router-dom";
import { useResumeDownload } from "@/hooks/useResumeDownload";

export default function Header() {
  const { downloadResume } = useResumeDownload();
  const emailSubject = encodeURIComponent("Let's talk");
  const emailBody = encodeURIComponent(
    "Hi Sam,\n\nI'd like to connect about...",
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.paper",
        borderBottom: "1px solid #7c3aed",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "primary.light" }}>
          Morrison Creative Labs
        </Typography>
        <Button color="inherit" component={Link} to="/" nativeButton={false}>
          Home
        </Button>
        <Tooltip title="Coming Soon">
          <span>
            <Button
              color="inherit"
              component={Link}
              to="/projects"
              nativeButton={false}
              disabled
            >
              Projects
            </Button>
          </span>
        </Tooltip>

        <Button
          color="inherit"
          component={Link}
          to="/about"
          nativeButton={false}
        >
          About
        </Button>
        <Button
          component="a"
          href={`mailto:sam@morrisoncreativelabs.com?subject=${emailSubject}&body=${emailBody}`}
          className="btn-primary"
          color="inherit"
        >
          Email Me
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/resume"
          nativeButton={false}
        >
          Resume
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/snake"
          nativeButton={false}
        >
          Play
        </Button>
        <Button color="inherit" onClick={downloadResume}>
          Download Resume <DownloadingSharpIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
