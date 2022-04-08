export async function getData(dataPath) {
  const data = await fetch(dataPath)
    .then((res) => res.json())
    .catch((err) => console.error(`Error ${err} while fetch`));
  return data;
}