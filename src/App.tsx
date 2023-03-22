import { themeConfig, UIProvider } from 'configs/themes';
import MasterRouter from './routers';
import 'configs/locales';
import './styles/global.css';

function App() {
  return (
    <UIProvider config={themeConfig}>
      <MasterRouter />
    </UIProvider>
  );
}

export default App;
