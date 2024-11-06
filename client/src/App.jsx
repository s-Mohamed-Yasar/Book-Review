import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatorPage from "./pages/CreatorPage";
import AllReviewPage from "./pages/AllReviewPage"
import EditPage from "./pages/EditPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />

        <Route path="/create" element={<CreatorPage />} />
        <Route path="/all/review" element={<AllReviewPage />} />
        <Route path="/edit" element={<EditPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
