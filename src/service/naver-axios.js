class Naver {
  constructor(httpClient) {
    this.naver = httpClient;
  }
  
  async onLoad(query, display, country, yearfrom, yearto) {
    const response = await this.naver.get('search/movie.json',{
      params: {
        query,
        display,
        country,
        yearfrom,
        yearto,
      },
    })

    return response.data;
  }
}



export default Naver

// ReactDOM.render(
//   <App load={loading}/>,
// )