import axios from "axios";

class Naver {
  constructor(httpClient) {
    this.naver = httpClient;
  }

  async onLoad(query, display, country, yearfrom, yearto) {
    // const response = await this.naver.get('search/movie.json',{
    const response = await axios.get(`/v1/search/movie.json`, {
      params: {
        query,
        display,
        country,
        yearfrom,
        yearto,
      },
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
      },
    });

    return response.data;
  }
}

export default Naver;

// ReactDOM.render(
//   <App load={loading}/>,
// )
