import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/homepage/Homepage";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFFF00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App"> 
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
