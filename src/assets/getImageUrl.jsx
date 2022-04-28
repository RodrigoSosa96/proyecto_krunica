
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
        if (transformations) {
            return new URL(`./f_auto,${transformations}/Krunica/${name}`, base).href;
        } 
        return new URL(`./f_auto/Krunica/${name}`, base).href
    }
}


export default getImageUrl;
export { getRemoteUrl };
