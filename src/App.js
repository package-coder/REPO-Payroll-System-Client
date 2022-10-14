import "@fontsource/inter";
import './assets/App.css';
import Routes from './routes';
import ThemeProvider from './themes';

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes/>
      </ThemeProvider>
    </>
  )
}

export default App;
