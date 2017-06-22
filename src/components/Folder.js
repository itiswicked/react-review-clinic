import React from 'react';

const Folder = props => {
  let handleClick = () => {
    props.setSelectedFolder(props.id);
  }

  let style;
  if(props.id === props.selectedFolderId) {
    // styling is different
    style = {backgroundColor: 'gray'};
  }
  return(
    <li onClick={handleClick} style={style}>
      <i className="fa fa-folder-o" aria-hidden="true"></i>
      {props.id}. {props.name}
    </li>
  )
}

export default Folder;






















// const Folder = props => {
//   let style;
//   if(props.selected) {
//     style = { backgroundColor: 'gray' };
//   }
//
//   let handleClick = () => {
//     props.setSelectedFolder(props.id)
//   }
//   return(
//     <li onClick={handleClick} style={style}>{props.id}. {props.name}</li>
//   )
// }
//
// export default Folder;
