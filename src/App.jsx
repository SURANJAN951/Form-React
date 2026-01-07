import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import FormDataPage from "./pages/FormDataPage";
import ApiDataPage from "./pages/ApiDataPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#ffffff" }}>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/form-data" element={<FormDataPage />} />
          <Route path="/api-data" element={<ApiDataPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
