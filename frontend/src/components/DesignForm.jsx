import axios from 'axios';

export default function DesignForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000/api/designs/', {
      title: "Mi diseño",
      description: "Traje steampunk en cuero"
    });
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Guardar diseño</button>
    </form>
  );
}