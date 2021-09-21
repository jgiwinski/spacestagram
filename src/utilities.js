const api_key = process.env.REACT_APP_API_KEY;

export const getData = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=10`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('This request isn\'t available')
        }
      })
  }
