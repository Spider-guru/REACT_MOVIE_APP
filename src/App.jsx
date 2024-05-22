import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import style from "./app.module.css";
import MovieCardContainer from "./components/MovieCardContainer";
import { useState } from "react";

//  features to be added:
// 1. To add link to header to reroute to homepage
// 2. enable endless scrolling until final result is received
// 3. enable ability to display movie synopsis via tooltip by hovering on search results
// 4. enabling ability to switch themes and recall former theme state
// 5. many more to come... stay tuned we are stil at the start position
// 6. make provision for env variables.
// 7. add few touches to the app to create a hint of originality
// 8. create a more welcoming home page

function App() {
	let [query, setQuery] = useState("");
	let [isSearchFound, setIsSearchFound] = useState(null);

	let [queryResult, setQueryResult] = useState([]);

	return (
		<div className={style.app}>
			<Header />

			<SearchBar
				query={query}
				setQuery={setQuery}
				queryResult={queryResult}
				setIsSearchFound={setIsSearchFound}
				setQueryResult={setQueryResult}
			/>

			<MovieCardContainer isSearchFound={isSearchFound} queryResult={queryResult} />
		</div>
	);
}

export default App;

