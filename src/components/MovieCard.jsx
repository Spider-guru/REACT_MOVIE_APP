import { useEffect, useState } from "react";
import style from "./movieCard.module.css";
import ApiKey from "./APIKEY";

export default function MovieCard({ item }) {
	let [data, setData] = useState(null);
	let id = item.imdbID;

	let fetchData = async (id) => {
		if (id == null) {
			console.log(`didn't even last! `);
			setData((p) => (p = null));
		}
		try {
			let data = await fetch(`https://www.omdbapi.com/?apikey=${ApiKey()}&i=${id}&plot=short`);
			let res = await data.json();
			setData((p) => (p = res));
		} catch (error) {
			setData(
				(p) =>
					(p = {
						comment: "error while fetching",
						error: error,
					})
			);
			console.log(error);
		}
	};

	let DetailsCard = ({ detail }) => {
		return (
			<div className={style.cardDetails}>
				<p className={style.detail}>
					<span className={style.detailHead}>Genre:</span>&nbsp;&nbsp;
					{detail.Genre}
				</p>
				<p className={style.detail}>
					<span className={style.detailHead}>Plot:</span>&nbsp;&nbsp;
					{detail.Plot}
				</p>
				<p className={style.detail}>
					<span className={style.detailHead}>Actors:</span>&nbsp;&nbsp;
					{detail.Actors}
				</p>
				<p className={style.detail}>
					<span className={style.detailHead}>Director(s):</span>&nbsp;&nbsp;
					{detail.Director}
				</p>
				<p className={style.detail}>
					<span className={style.detailHead}>Ratings:</span>&nbsp;&nbsp;
					{detail.Ratings[0].Value}&nbsp;({detail.Ratings[0].Source})
				</p>
				<p className={style.detail}>
					<span className={style.detailHead}>Awards:</span>&nbsp;&nbsp;
					{detail.Awards}
				</p>
				<p className={style.detail}>
					<span className={style.detailHead}>Runtime:</span>&nbsp;&nbsp;
					{detail.Runtime}
				</p>
			</div>
		);
	};

	useEffect(() => {
		if (data == null) {
			fetchData(id);
		}
	}, []);

	return (
		<div className={style.card}>
			{data !== null && <DetailsCard detail={data} />}
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
