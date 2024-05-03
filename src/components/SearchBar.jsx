import style from "./searchbar.module.css";
import searchIcon from "../assets/search-icon.svg";
import ApiKey from "./APIKEY"; // go to www.omdbapi.com , sign up and get your API key
import { useEffect } from "react";

export default function SearchBar({ setIsSearchFound, query, setQuery, setQueryResult }) {
	let Url = `http://www.omdbapi.com?apikey=${ApiKey()}`;
	let response;
	let data;

	let searchItems = async (title) => {
		try {
			response = await fetch(`${Url}&s=${title}`);

			data = await response.json();

			if (data.Response == "True") {
				setIsSearchFound((prev) => (prev = true));
			} else {
				setIsSearchFound((prev) => (prev = false));
			}

			setQueryResult((prev) => (prev = data.Search));

			setQuery("");
		} catch (error) {
			console.log("error occured while fetching");
			console.warn(error);
		}
	};

	//effect to automatically search a term on home
	useEffect(() => {
		searchItems("Amazing");
	}, []);

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className={style.searchBar}>
			<input
				type="text"
				className={style.input}
				placeholder="Search movie name, title etc"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>

			<button
				type="submit"
				className={style.submitBtn}
				onClick={() => searchItems(query)}>
				<img
					src={searchIcon}
					alt=""
				/>
			</button>
		</form>
	);
}
