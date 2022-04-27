import "./App.css";
import Input1 from "./components/Input1";
import Kartica from "./components/Kartica";

function App() {
  const objekat = {
    ime: ["Belma", " Medzi"],
    prezime: "Maljanovic",
  };
  const objekat2 = {
    ime: ["Suad", " Medzi"],
    prezime: "Suljovic",
  };
  const text = "Ovde je kartica broj:";
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <Input1 objekat={objekat} broj={5} />
      <Input1 objekat={objekat2} broj={7} />
      {array.map((number, index) => {
        return <Kartica text={text} broj={number} key={index} />;
      })}
    </div>
  );
}

export default App;
