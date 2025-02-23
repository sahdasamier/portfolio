export async function getData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/Sahdasamier/github/main/data.json",
    { cache: "force-cache" }
  );
  return await response.json();
}
