// import { log } from "console";
import MoviesCarousel from "@/components/ui/MoviesCarousel";
import { getDiscoverMovies, getPopularMovies } from "@/lib/getMovies";
import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage({ params, searchParams }: Props) {
  // Client-side only code here
  const { id } = await params;
  const { genre } = await searchParams;
  const movies = await getDiscoverMovies(id);
  const popularMovies = await getPopularMovies();
  const title = `Results for ${genre}`;

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col space-y-2 mt-32 xl:mt-40">
        <MoviesCarousel title={title} movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default GenrePage;
