import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}
