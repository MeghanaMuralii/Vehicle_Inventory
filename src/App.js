import logo from './logo.svg';
import './App.css';
import AddVehicle from './components/AddVehicle';
import Delete from './components/Delete';
import View from './components/View';
import SearchVehicle from './components/SearchVehicle';

function App() {
  return (
    <div>
      <AddVehicle />
      <SearchVehicle />
      <Delete />
      <View />
      
    </div>
  );
}

export default App;
