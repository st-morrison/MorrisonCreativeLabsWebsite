import { Box } from "@mui/material";
import SnakeGame from "@/components/SnakeGame";

export function SnakePopout() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <SnakeGame />
    </Box>
  );
}
