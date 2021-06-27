class Naver{
    constructor(id, secret){
        this.id = id;
        this.secret = secret;
        this.myHeaders = new Headers();
            this.myHeaders.append('X-Naver-Client-Id', id);
            this.myHeaders.append("X-Naver-Client-Secret", secret);

        this.requestOptions = {
            method: 'GET',
            headers: this.myHeaders,
            redirect: 'follow'
        };
    }

    async onLoad(query, display, country, from, to){
        const search =
        await fetch(
          `https://search-naver-movie.herokuapp.com/https://openapi.naver.com/v1/search/movie.json?query=${query}&display=${display}&country=${country}&yearfrom=${from}&yearto=${to}`,
        this.requestOptions);
        const response = await search.json();
        return response;
    };
}

export default Naver;