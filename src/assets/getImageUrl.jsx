
function getImageUrl(name) {
    return new URL(`./img/${name}`, import.meta.url).href
}
export default getImageUrl;
