import style from "./moviecardcontainer.module.css";
import MovieCard from "./MovieCard";
import loaderGif from "../assets/Spinner.svg";

export default function MovieCardContainer({ isSearchFound, queryResult }) {
	return (
		<>
			{isSearchFound ? (
				<div className={style.movieCardContainer}>
					{queryResult.map((item) => (
						<MovieCard
							key={Math.random() * 2000}
							item={item}
						/>
					))}
				</div>
			) : (
				<div className={style.empty}>
					<p>
						Sorry No results found.. <br />
						Try searching for another term or checking your internet connection
					</p>
					<img
						src={loaderGif}
						alt=""
					/>
				</div>
			)}
		</>
	);
}
