export const slugify = (string) => {
    return string.normalize('NFKD')
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace('_', '-')
        .replace(/[-\s]+/g, '-');
}
