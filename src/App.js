import './App.scss';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      {createData().map((data, i) => (
        <Card key={i} number={data} />
      ))}
    </div>
  );
}

function createData() {
  let data = [];
  for(let i=0; i<14; i++) {
    data.push(i);
  }
  return data;
}

export default App;
