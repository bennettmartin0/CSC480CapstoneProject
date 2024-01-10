import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { FactsPage } from "./pages/FactsPage";
import { LawsPage } from "./pages/LawsPage";
import { ReportPage } from "./pages/ReportPage";
import { FAQPage } from "./pages/FAQPage";
import { HomePage } from "./pages/HomePage";
import { AttributionsPage } from "./pages/AttributionsPage";

export const PageRouter = () => {

    return (
            <Routes>
                <Route path='*'         element={<ErrorPage />}/>                
                <Route path='/'         element={<HomePage />}/>
                <Route path='/facts'    element={<FactsPage />}/>
                <Route path='/laws'     element={<LawsPage />}/>
                <Route path='/report'   element={<ReportPage />}/>
                <Route path='/faq'      element={<FAQPage />}/>

                <Route path="/attributions" element={<AttributionsPage />}/>
            </Routes>
    );
}