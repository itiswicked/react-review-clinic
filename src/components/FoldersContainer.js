import React from 'react';
import Folder from './Folder';
import mockFetch from './../utilities/mockFetch';

class FoldersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFolderId: null
    }
    this.setSelectedFolder = this.setSelectedFolder.bind(this);
  }

  setSelectedFolder(id) {
    if(id === this.state.selectedFolderId) {
      this.setState({selectedFolderId: null})
    } else {
      this.setState({selectedFolderId: id});
    }
  }

  render() {
    console.log(this.state);
    let folderComps = this.props.folders.map(folder => {

      return (
        <Folder
          key={folder.id}
          name={folder.name}
          id={folder.id}
          selectedFolderId={this.state.selectedFolderId}
          setSelectedFolder={this.setSelectedFolder}
        />
      );
    })
    return(
      <ul>
        Hello from Folders Container!
        {folderComps}
      </ul>
    );
  }
}

export default FoldersContainer;


















// class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedFolderId: null,
//       folders: null
//     };
//
//     this.setSelectedFolder = this.setSelectedFolder.bind(this);
//     this.loadFolders = this.loadFolders.bind(this);
//   }
//
//   setSelectedFolder(id) {
//     if(this.state.selectedFolderId === id) {
//       this.setState({ selectedFolderId: null});
//     } else {
//       this.setState({ selectedFolderId: id});
//     }
//   }
//
//   loadFolders() {
//     mockFetch('some/random/url')
//     // .then(response => response.json())
//       .then(body => {
//         this.setState({ folders: body.folders })
//       })
//   }
//
//
//   render() {
//     let folders = this.state.folders
//     let folderComps = folders && folders.map(folder => {
//       let selected = false;
//       if(this.state.selectedFolderId === folder.id) {
//         selected = true;
//       }
//       return(
//         <Folder
//           key={folder.id}
//           name={folder.name}
//           id={folder.id}
//           setSelectedFolder={this.setSelectedFolder}
//           selected={selected}
//         />
//       );
//     })
//     return(
//       <ul>
//         {folderComps || "Loading ..."}
//         <button onClick={this.loadFolders}>Load!!!</button>
//       </ul>
//     );
//   }
// }
//
// export default StatefulComponent;
