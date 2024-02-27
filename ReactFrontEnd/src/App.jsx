import Contact from "./assets/Contact"
import Hello from "./assets/Hello"

function App() {
  const HelloData = [
    { name : 'Anirach', message : 'Hi there' },
    { name : 'Tom', message : 'Hello...' }
  ];

  return (
      <div>
        {HelloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message} />
        ))}

        <Contact email="Anirach@gmail.com" phone="0817320731" />
      </div>
  );
}

export default App
