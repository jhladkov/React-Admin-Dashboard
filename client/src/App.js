
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "./theme";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "scenes/dashboard"
import Layout from 'scenes/layout'


function App() {
  const mode = useSelector(state => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])


  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* sth like normalize css*/}
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route
                  path='/'
                  element={<Navigate replace to='/dashboard'/>}
              />
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
