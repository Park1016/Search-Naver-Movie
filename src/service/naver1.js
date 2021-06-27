﻿class Naver {
  constructor(httpClient) {
    this.naver = httpClient;
  }

  async onLoad(query, display, country, yearfrom, yearto) {
    const response = await this.naver.get('search/movie.json',{
      params: {
        query: query,
        display: display,
        country: country,
        yearfrom: yearfrom,
        yearto: yearto,
      },
    });
    return response;
  }
}
  
export default Naver;