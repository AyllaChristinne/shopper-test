import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AppProvider } from "context/AppContext";
import { Snackbar } from "components/snackbar";
import { RoutePage } from "pages/Route";
import { HistoryPage } from "pages/History";

function App() {
  return (
    <AppProvider>
      <Snackbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/rides" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
