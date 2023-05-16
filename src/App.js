import { useState } from 'react';
import './App.css';
// 1,0
// Another common type of component which can utilizes state is an accordion component, which can both reveal and hide text.
function App() {
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }


  return (
    <div className="wrapper">
      <div className="accordion">
         <div className="header-text">
          <h1>FAQ</h1>
         </div>

         {data.map((items, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h2>{items.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className = {selected === i ? 'content show' : 'content'}>{items.answer}</div>
          </div>
         ))}
   
      </div>
    </div>
  );
}

const data = [
  {
    question : 'Question 1',
    answer : 
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel odio, id ipsum explicabo excepturi similique ipsa veritatis maiores sit, rem tenetur delectus ex ab quas, autem consequatur porro aspernatur. Optio.'
  },
  {
    question : 'Question 2',
    answer : 
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel odio, id ipsum explicabo excepturi similique ipsa veritatis maiores sit, rem tenetur delectus ex ab quas, autem consequatur porro aspernatur. Optio.'
  },
  {
    question : 'Question 3',
    answer : 
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel odio, id ipsum explicabo excepturi similique ipsa veritatis maiores sit, rem tenetur delectus ex ab quas, autem consequatur porro aspernatur. Optio.'
  },
  {
    question : 'Question 4',
    answer : 
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel odio, id ipsum explicabo excepturi similique ipsa veritatis maiores sit, rem tenetur delectus ex ab quas, autem consequatur porro aspernatur. Optio.'
  }
]

export default App;
