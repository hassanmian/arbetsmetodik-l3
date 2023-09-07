import logo from './logo.svg';
import './App.css';
import CarInfo from './CarInfo'

function App() {
  const brand = "Audi"
  const modelYear = 2000
  const model = "A3"
  const currentMileage = 5000
  const bigServiceMileage = 6000

  return (
    <div className="App">
      <header className="App-header">
        <CarInfo 
          brand={brand} 
          model={model} 
          modelYear={modelYear} 
        />
        <CarInfo
          brand="Volvo"
          model="V70"
          modelYear="2005"
        />
        <CarInfo
          brand="Aston Martin"
          model="Rapide"
          modelYear="2022"
        />
        
      </header>
    </div>
  );
}

export default App;
