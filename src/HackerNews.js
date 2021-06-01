import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    Link
  } from "react-router-dom";

import reactImg from "./logo192.png";

export const HackerNews = () => {
	const [results, setResults] = useState([]);
	const [query, setQuery] = useState("react hooks");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const serachInputRef = useRef();

	useEffect(() => {
		getresults();
	}, []);

	const getresults = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				`http://hn.algolia.com/api/v1/search?query=${query}`
			);
			setResults(response.data.hits);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		getresults();
	};

	const handleClearSearch = () => {
		setQuery("");
		//focus when search is cleared
		serachInputRef.current.focus();
	};
	return (
		<div className="container max-w-md mx-auto p-4 m-2 bg-gray-600 shadow-lg rounded">
        <div className="Back">
            <Link to="/" className="Back-link">
               Back 
            </Link>
        </div>
			<img src={reactImg} alt="react logo" className="h-8 float-right" />
			<h1 className="text-grey-darkest text-4xl font-thin">
				Hooks Hacker News
			</h1>
			<form onSubmit={handleSearch} className="mb-2">
				<input
					type="text"
					onChange={(event) => setQuery(event.target.value)}
					value={query}
					ref={serachInputRef}
					className="border p-1 rounded"
				/>
				<button
					type="submit"
					className="bg-purple-700 text-white rounded m-1 p-1"
				>
					Search
				</button>
				<button
					className="text-white rounded m-1 p-1"
					type="button"
					onClick={handleClearSearch}
					style={{ background: "#64CCEA" }}
				>
					Clear
				</button>
			</form>
			{loading ? (
				<div>Loading results...</div>
			) : (
				<ul>
					{results.map((result) => (
						<li key={result.objectID}>
							<a
								href={result.url}
								className="text-white hover:text-purple-700 "
							>
								{result.title}
							</a>
						</li>
					))}
				</ul>
			)}
			{error && <div className="text-red-900">{error.message}</div>}
		</div>
	);
}
