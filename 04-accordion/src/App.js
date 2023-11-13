import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  const [value, setvalue] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Frequently Asked Questions</h3>
        <section className="info">
          {value.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
