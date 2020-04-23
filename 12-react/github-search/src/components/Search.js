import React, { useState } from 'react';

// // Hooks
export default () => {
  const [userName, setUserName] = useState('');

  return (
    <h1>Search coming soon</h1>
  );
};

// import React, { useState } from 'react';
//
// export default function () {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//
//   console.log('rerendering');
//   console.log('count', count);
//
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
