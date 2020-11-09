export default function getGenresFunc(genreIdArr, genreTypesArr) {
    const genres = [];
    for (let i = 0; i < genreIdArr.length; i++) {
        for (const genre of genreTypesArr) {
            if (genreIdArr[i] === genre.id) {
                genres.push(genre.name)
            }
        }
    }
    return genres;

}