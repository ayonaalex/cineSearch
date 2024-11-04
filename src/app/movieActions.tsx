"use server";

export async function fetchMovies(apiKey: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}

export async function Recommendations(apiKey: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/27205/recommendations?api_key=${apiKey}`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}

export async function topMovies(apiKey: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}
