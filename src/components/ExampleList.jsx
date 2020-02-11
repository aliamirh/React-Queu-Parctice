import React from 'react';
import Example from './Example';

var masterExampleList = [
  {
    sentence: 'hello, we ate oats for breakfast'
  },
  {
    sentence: 'hello, we ate eggs for breakfast'
  },
  {
    sentence: 'hello, we ate fear for breakfast'
  }
];

function ExampleList(){
  return (
    <div>
    <hr/>
    {masterExampleList.map((sent, index) =>
      <Example sentence={sent.sentence}
      key={index}/>
    )}
    </div>
  );
}

export default ExampleList;
