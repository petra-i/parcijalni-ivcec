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
			<div className="user-info mb-20">
				<h5>Username: {userData.login}</h5>
				<img
					style={{ width: "150px", height: "150px", borderRadius: "50%" }}
					src={userData.avatar_url}
					alt={`${userData.login}"s avatar`}
				/>
				<h6>Name: {userData.name || ""}</h6>
				<h6>Location: {userData.location || ""}</h6>
				<h6>Bio: {userData.bio || ""}</h6>
			</div>
		</div>
	);
};

export default UserInfo;
