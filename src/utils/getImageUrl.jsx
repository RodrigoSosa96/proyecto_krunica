
const getImageUrl = (route) => (name) => {
    if (name == "") return "";
    return new URL(`${route + name}`, import.meta.url).href
}
export default getImageUrl;
