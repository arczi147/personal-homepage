import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyle";
import { PersonalHomepage } from "../features/author/PersonalHomepage";
import { theme } from "../theme";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    )
};

export default App;