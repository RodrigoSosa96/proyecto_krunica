
function getImageUrl(location) {
    let base = location === "local" ? import.meta.url : location;
    let dir = "./"
    if (location === "local") dir = "./img/";

    return function (name, transformations) {
        let url = new URL(`${dir}${name}`, base);
        if (transformations) {
            url.searchParams.append("tr", transformations);
        }
        return url.href;
    }
}

export default getImageUrl;
