import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
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
			<h5>Repositories:</h5>
			<ListGroup className="mb-20">
				{repos.map(repo => (
					<ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
				))}
			</ListGroup>
			<Button className="primaryButton" variant="dark" onClick={onReturn}>
				Reset
			</Button>
		</div>
	);
};

export default RepositoryList;
