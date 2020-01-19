export const filterList = (arr, text) => {
    return arr.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
};
