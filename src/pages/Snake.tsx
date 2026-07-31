import SnakeGame from "@/components/SnakeGame";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Tooltip } from "@mui/material";

function handleOpenSnakePopup() {
  window.open(
    "/snake-popout",
    "SnakeGame",
    "width=460,height=680,menubar=no,toolbar=no,location=no,status=no,resizable=no",
  );
}

export default function SnakePage() {
  return (
    <>
      <SnakeGame />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: 400, // matches SnakeGame's canvas width (COLS * SZ)
          mx: "auto", // centers this 400px box the same way the canvas is centered
        }}
      >
        <Tooltip title="Open Me In a Separate Window!">
          <IconButton
            onClick={handleOpenSnakePopup}
            aria-label="Play Snake in popup"
          >
            <OpenInNewIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}
