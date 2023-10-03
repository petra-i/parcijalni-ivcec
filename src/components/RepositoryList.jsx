import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const RepositoryList = ({ reposUrl, onReturn }) => {
	RepositoryList.propTypes = {
		reposUrl: PropTypes.string.isRequired,
		onReturn: PropTypes.func.isRequired,
	};

	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(reposUrl);
				const data = await response.json();
				setRepos(data);
			} catch (error) {
				console.error("Error fetching repositories:", error);
				setRepos([]);
			}
		};

		fetchRepos();
	}, []);

	return (
		<div>
			<h3>Repositories:</h3>
			<ul>
				{repos.map(repo => (
					<li key={repo.id}>{repo.name}</li>
				))}
			</ul>
			<Button variant="primary" onClick={onReturn}>
				Reset
			</Button>
		</div>
	);
};

export default RepositoryList;
