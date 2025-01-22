import { Genres } from "@/typings";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

async function GenreDropDown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  // console.log("genres data",data)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center items-center space-x-1 text-white">
        <span>Genre</span>
        <ChevronDown size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre) => (
          <Link href={`/genre/${genre.id}?genre=${genre.name}`} key={genre.id}>
            <DropdownMenuItem key={genre.id}>{genre.name}</DropdownMenuItem>
          </Link>
        ))}
        {/* <DropdownMenuSeparator />
        <Link href="/genres">
          <DropdownMenuItem>All Genres</DropdownMenuItem>
        </Link> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropDown;
