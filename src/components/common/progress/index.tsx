import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex", height: "calc(100svh - 146px);", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress />
    </Box>
  );
}
