import { useEffect, useState, useRef } from 'react';
import BoxColor from './BoxColor';

function MyFormChallenge() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [newColor, setNewColor] = useState('');
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.focus();
  }, []);


  return (
    <>
      <input
        id="color"
        type="text"
        placeholder="Elige un color"
        onChange={() => setNewColor(colorRef.current.value)}
        value={newColor}
        ref={colorRef}
      />

      <div className='container'>
        <div className="box-container">
            {colors.map((color, index) => (
              <BoxColor key={index} color={color} value={newColor} />
            ))}
        </div>
      </div>
    </>
  );
}

export default MyFormChallenge;