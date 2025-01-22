import { getDiscoverMovies } from '@/lib/getMovies';
import React from 'react'
import CarouselBanner from './ui/CarouselBanner';

type Props = {
  id?: string;
  keywords?: string;
}

async function CarouselBannerWrapper({id,keywords}:Props) {
    const movies = await getDiscoverMovies(id,keywords);
  return (
    <CarouselBanner movies={movies} /> 
  )
}

export default CarouselBannerWrapper