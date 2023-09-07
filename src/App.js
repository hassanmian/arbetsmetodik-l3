import './App.css';
import Title from './Title';
import Preamble from './Preamble';
import Image from './Image';
import Ingredient from './Ingredient';
import Instruction from './Instruction';

function App() {
  return (
    <div className="App">
      <Title heading="Här hittar ni mina recept" />
      <Preamble preamble="Här kommer jag att lägga upp mina recept." />
      <Image source="https://source.unsplash.com/random/400x200" alternative="Random bild"/>
      <div>
        <h2>Ingredienser</h2>
        <ul>
          <Ingredient name="Ägg" quantity="2" unit="st" />
          <Ingredient name="Socker" quantity="2" unit="dl" />
          <Ingredient name="Mjöl" quantity="2" unit="dl" />
          <Ingredient name="Bakpulver" quantity="2" unit="tsk" />
        </ul>
        <h2>Instruktioner</h2>
        <ol>
          <Instruction step="🥚 Vispa ägg och socker pösigt" />
          <Instruction step="🧋 Blanda mjöl och bakpulver" />
          <Instruction step="🥚 + 🧋 Rör ner mjölblandningen i äggsmeten" />
          <Instruction step="🍰 Häll smeten i en smord form" />
          <Instruction step="⏲️ Grädda i 175 grader i 30 minuter" />
        </ol>
      </div>
    </div>
  );
}

export default App;
