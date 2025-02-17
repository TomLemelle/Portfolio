export default function formatString(input) {
  // Remplacer les espaces par un tiret "-"
  let formattedString = input.replace(/\s+/g, "-");

  // Supprimer les espaces encodés "%20" dans le cas où il y en a
  formattedString = formattedString.replace(/%20/g, "");

  // Éviter les doubles tirets "–" (enlever s'il y en a deux côte à côte)
  formattedString = formattedString.replace(/--+/g, "-");

  return formattedString.toLowerCase();
}
