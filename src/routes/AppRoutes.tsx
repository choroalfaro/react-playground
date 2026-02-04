import { Routes, Route } from "react-router";
import { AppLayout } from "../layout/AppLayout";
import { Home } from "../pages/Home";
// import { About } from "../pages/About";
// import { NotFound } from "../pages/NotFound";
import { SquareNestedBlocks } from "../pages/SquareNestedBlocks";

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/square-nested-blocks" element={<SquareNestedBlocks />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}