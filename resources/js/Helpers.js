export const slugify = (string) => {
    return string.normalize('NFKD')
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace('_', '-')
        .replace(/[-\s]+/g, '-');
}

export const asset = (directory, id, extension, size = '') => {
    if (size !== '') {
        size = '_' + size;
    }
    return route('home') + "/media/" + directory + "/" + id + size + "." + extension
}
