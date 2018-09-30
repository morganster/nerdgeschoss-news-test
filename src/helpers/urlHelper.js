export function fixUrl(url) {
    return url.indexOf('http') === -1 ? `//${url}` : url;
}