import React from 'react';

import FoldersContainer from './FoldersContainer';

let folders = [
  { name: "Online - Experience", id: 1 },
  { name: "On Campus - Experience", id: 2 },
  { name: "Engineering", id: 3 },
  { name: "Facilitation Slide Decks", id: 4 }
];

const App = () => {
  return (
    <FoldersContainer folders={folders} />
  );
}

export default App;
