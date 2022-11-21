export function paginate(items, pageNumber, pageSize) {
    console.log('paginate');
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
