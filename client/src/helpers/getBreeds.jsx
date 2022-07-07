

const getBreeds = async() => {
    const URL = 'https://api.thedogapi.com/v1/breeds';
    const res = await fetch(URL)
    const breeds = await res.json();

    return breeds
}

export default getBreeds