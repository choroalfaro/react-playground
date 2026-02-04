import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

export function AppLayout() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />

            <Box component="main" sx={{ flex: 1, py: 3 }}>
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
}