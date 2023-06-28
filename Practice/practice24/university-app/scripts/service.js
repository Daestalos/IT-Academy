// http://universities.hipolabs.com/search?name=middle&country=Turkey

const API_URL = 'http://universities.hipolabs.com/search?country='

const getResource = async (url) => {
    try{
        const res = await fetch(url);
        return res.json();
    } catch(e){
        throw new Error(`!!!!!!!!!!!!!!!!! ${e}`)
    }


}

const getUniverList = async (country = 'belarus') => {
    const data = await getResource(`${API_URL}${country}`)
    return data
}

const getUniverItem = async (country = 'belarus', univerName = '') => {
    const data = await getResource(`${API_URL}${country}&name=${univerName}`)
    return data;
}

// getUniverList();