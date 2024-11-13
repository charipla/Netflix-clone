import { useEffect, useState } from "react";
import axios from "../../axios";
import { requests } from "../../request";
import { Movie } from "../../type";

export const useProps = () => {
    const [movie, setMovie] = useState<Movie>();
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ],
            );
        }
        fetchData();
    },[]);

    const truncate = (str: string | undefined, n: number): string => {
        if (!str) {
            return "";
        }
        if (str.length > n) {
            return str.substr(0, n - 1) + "...";
          } else {
            return str;
          }
    };

    return {
        movie,
        truncate,
    };
};