import React from 'react';

function Skills() {
	const skills = [
		'React',
		'JavaScript',
		'HTML',
		'CSS',
		'Python',
		'Java',
		'C++',
		'C',
		'SQL',
		'Git',
		'GitHub',
		'Linux',
		'Docker',
		'Kubernetes',
		'AWS',
		'Azure',
		'Google Cloud',
		'Machine Learning',
		'Deep Learning',
		'Computer Vision',
		'Natural Language Processing',
		'Computer Graphics'];
	return (
		<section id="skills" className="container mx-auto p-4">
			<h2 className="text-3xl font-bold mb-4">Skills</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{skills.map((skill, index) => (
					// <ul className="list-disc list-inside">
					// {skills.map((skill) => (
					// 	<li key={index}>{skill}</li>
					// ))}
					// </ul>
					<div key={index} className="bg-white p-4 rounded-lg shadow-md">
						<h3 className="text-xl font-bold mb-2">{skill}</h3>
					</div>
				
				))}
			</div>
		</section>
	);
}
export default Skills;
