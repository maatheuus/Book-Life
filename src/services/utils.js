export function addFavorites(data, id, isSave) {
  const favorites = [...data];
  const existingBookIndex = favorites.findIndex((item) => item.id === id);

  if (existingBookIndex > -1) {
    // Se o livro já estiver nos favoritos, atualiza a propriedade isBookmarked
    favorites[existingBookIndex].isBookmarked = !isSave;
  } else {
    // Se o livro não estiver nos favoritos, adiciona-o
    const newItem = { id, isBookmarked: !isSave };
    favorites.push(newItem);
  }

  const isolatedFavorites = favorites
    .map((book) => book)
    .filter((book) => book.isBookmarked === true || book.isBookmarked);

  return { favoriteBooks: isolatedFavorites || {} };
}

export function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

export function removeDuplicates(arr) {
  return [...new Set(arr)];
}
