export default async function (query: string = "") {
  try {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}`
    );
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.log(error);
  }
}
