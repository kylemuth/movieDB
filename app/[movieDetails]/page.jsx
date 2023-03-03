import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { movieDetails } = params;
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieDetails}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 p-2 rounded-md">
          {res.status}
        </h2>
        <img
          className="my-12 width-1000 h-auto"
          src={imagePath + res.backdrop_path}
        />
      </div>
    </div>
  );
}
