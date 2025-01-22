import MoviesCarousel from "@/components/ui/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    word: string;
  };
};

async function SearchPage({ params }: Props) {
  const { word } = await params;

  if (!word) notFound();
  const wordToUse = decodeURI(word);

  // API call to get searched movies
  const searchedMovies = await getSearchedMovies(wordToUse);
  // API call to get popular movies
  const popularMovies = await getPopularMovies();
  const title = `Search Results for ${wordToUse}`

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col space-y-2 mt-32 xl:mt-40">
        
        <MoviesCarousel
          title={title}
          movies={searchedMovies}
          isVertical
        />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
