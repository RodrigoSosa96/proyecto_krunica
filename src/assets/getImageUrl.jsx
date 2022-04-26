
/**
 * En caso de usar imagenes remotas, se debe usar la función getRemoteUrl
 * Primero crear una variable url que contenga la función getRemoteUrl
 * Luego usar transformaciones en caso de haber
 * 
 */

function getImageUrl(name) {
    return new URL(`./img/${name}`, import.meta.url).href
}

function getRemoteUrl(location) {
    let base = location;

    return function (name, transformations) {
        let url = new URL(`./${name}`, base);
        if (transformations) {
            url.searchParams.append("tr", transformations);
        }
        return url.href;
    }
}


export default getImageUrl;
export { getRemoteUrl };
