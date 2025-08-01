
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
    <MantineProvider>
 <HomePage/>
 
     </MantineProvider>
   
    </div>
  );
}

export default App;
