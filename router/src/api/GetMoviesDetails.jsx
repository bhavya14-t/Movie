export const getMoviesDetails = async ({ params }) => {
    console.log(params);
    const id = params.movieID;
  
    try {
      const response = await fetch(
       `https://www.omdbapi.com/?i=${id}&apikey=56a96be`
      );
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };