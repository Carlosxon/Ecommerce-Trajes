
import Designer3D from './components/Designer3D';



function App() {
  return (
    
    <div>
      <h1>Diseña tu traje</h1>
      <Designer3D />
    </div>
  );
}
fetch('http://127.0.0.1:8000/api/endpoint/') 
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



export default App;
