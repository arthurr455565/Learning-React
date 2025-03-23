import React from 'react';

const StudentsList = () => {
	const students = [
		{ id: 1, name: "Bishal", grade : "A"},
		{ id: 2, name: "Raj", grade: "B"},
		{ id: 3, name: "Sonu", grade: "C"},
	];

	return(
		<div className='students-list'>
		<h2>Students List</h2>
		<ul>
		{students.map((student) => (
			<li key = {student.id} >
			{student.name} (Grade: {student.grade})
			</li>
			))
		}

		</ul>
		</div>

		);
};

export default StudentsList;