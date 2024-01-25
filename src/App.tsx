import { useState } from 'react'

function App() {
  const [activePage,setActoinActivePage]=useState(1)
  return (
    <div className='DIV'>
      <div
        className={activePage == 1 ? "active" : ""}
        onClick={() => {
          setActoinActivePage(1);
        }}
      >
        1
      </div>
      <div
        className={activePage == 2 ? "active" : ""}
        onClick={() => {
          setActoinActivePage(2);
        }}
      >
        2
      </div>
      <div
        className={activePage == 3 ? "active" : ""}
        onClick={() => {
          setActoinActivePage(3);
        }}
      >
        3
      </div>
    </div>
  );
}

export default App
