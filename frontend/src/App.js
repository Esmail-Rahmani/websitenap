import "./App.css";
import Appbar from "./components/Appbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Blog from "./pages/Blog";
import SingleCard from "./pages/SingleCard";
import "antd/dist/antd.min.css";

import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Serif", "serif"].join(","),
  },
  Card: {
    width: 200,
    margin: "auto",
  },
  Media: {
    height: "100%",
    width: "100%",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <New /> */}
        <Router>
          <Appbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/form_upload" element={<Form />} />
            <Route exact path="/singleCard/:id" element={<SingleCard />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
