import style from "./movieCard.module.css";

export default function MovieCard({ item }) {
	return (
		<div className={style.card}>
			<div className={style.image}>
				<img
					src={item.Poster !== "N/A" ? item.Poster : "https://via.placeholder.com/400"}
					alt={item.Title}
				/>
			</div>

			<div className={style.details}>
				<span className={style.text}>{item.Title}</span>
				<span className={style.text}>{item.Year}</span>
				<span className={style.text}>{item.Type.toUpperCase()}</span>
			</div>
		</div>
	);
}
