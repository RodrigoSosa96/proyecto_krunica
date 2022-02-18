
function getImageUrl(name) {
    return new URL(`./img/${name}`, import.meta.url)
}
export default getImageUrl;
