
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/ui/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";
import React from "react";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <div>
      <main>
        {/* Carousel Banner Wrapper */}
        <CarouselBannerWrapper />
        <div className="flex flex-col space-y-2 xl:-mt-48">
          {/* Movies Carousel */}
          <MoviesCarousel title="Upcoming" movies={upcomingMovies} />
          <MoviesCarousel title="Top Rated" movies={topRatedMovies} />
          <MoviesCarousel title="Popular" movies={popularMovies} />
        </div>
      </main>
    </div>
  );
}
