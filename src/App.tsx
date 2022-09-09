import React from 'react';
import Card, { CardVariant } from './components/Card';


const App = () => {
  return (
    <div>
      Typescript learn
      <Card onClick={(num) => console.log(num)} variant={CardVariant.primary} width='200px' height='200px' >
        <button>Кнопочка</button>
        <div>Nikitos</div>
      </Card>
    </div>
  );
}

export default App;
