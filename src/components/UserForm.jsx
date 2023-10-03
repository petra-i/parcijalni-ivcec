import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UserForm = ({ username, onInputChange, onSubmit }) => {
	return (
		<div className="formContainer">
			<Form>
				<Form.Group controlId="formBasicUsername">
					<Form.Label>Github Username:</Form.Label>
					<Form.Control
						type="text"
						placeholder="e.g. facebook"
						value={username}
						onChange={onInputChange}
						className="inputField"
					/>
				</Form.Group>

				<Button variant="dark" onClick={onSubmit} className="primaryButton">
					Go
				</Button>
			</Form>
		</div>
	);
};

export default UserForm;
