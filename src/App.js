import logo from './logo.svg';
import './App.css';
import DataProvider from './Context/DataProvider';

//components
import Homea from './Homea';




const App = () => { 
  return (
<DataProvider>
   <Homea />
   </DataProvider>
  )
}

export default App;


// DataProvider and DataContext = it is used to wrap home component, bcs we need given data in all homepage components i.e notes, archive, edit notes, 