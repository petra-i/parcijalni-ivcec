import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ userData }) => {
	UserInfo.propTypes = {
		userData: PropTypes.shape({
			login: PropTypes.string.isRequired,
			avatar_url: PropTypes.string.isRequired,
			name: PropTypes.string,
			location: PropTypes.string,
			bio: PropTypes.string,
		}),
	};

	return (
		<div className="user-info-page">
			<div className="user-info">
				<h2>{userData.login}</h2>
				<img
					style={{ width: "150px", height: "150px", borderRadius: "50%" }}
					src={userData.avatar_url}
					alt={`${userData.login}'s avatar`}
				/>
				<h2>Name: {userData.name || ""}</h2>
				<h2>Location: {userData.location || ""}</h2>
				<h2>Bio: {userData.bio || ""}</h2>
			</div>
		</div>
	);
};

export default UserInfo;
