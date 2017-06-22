const mockFetch = (url) => {
  return new Promise((resolve, reject) => {
    let data = () => {
      let folders = [
        { name: "Online - Experience", id: 1 },
        { name: "On Campus - Experience", id: 2 },
        { name: "Engineering", id: 3 },
        { name: "Facilitation Slide Decks", id: 4 }
      ]
      resolve({ folders: folders })
    };

    setTimeout(data, 1000);
  });
}

export default mockFetch;
