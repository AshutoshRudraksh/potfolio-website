import React from 'react';

function Projects() {
	const projectlist = [
		{
			title: 'Project One',
			description: 'This is a description of project one',
			link: 'https://github.com/AshutoshRudraksh/portfolio-website',
		},
		{
			title: 'Project Two',
			description: 'This is a description of project two',
			link: 'https://github.com/AshutoshRudraksh/portfolio-website',
		},
		{
			title: 'Project Three',
			description: 'This is a description of project three',
			link: 'https://github.com/AshutoshRudraksh/portfolio-website',
		},
	];
	return (
		<section id="projects" className="container mx-auto p-4">
			<h2 className="text-3xl font-bold mb-4">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projectlist.map((project, index) => (
					<div key={index} className="bg-white p-4 rounded-lg shadow-md">
						<h3 className="text-xl font-bold mb-2">{project.title}</h3>
						<p>{project.description}</p>
						<a href={project.link} className="text-blue-500 hover:underline">View Project</a>
					</div>
				))}
			</div>
				
		</section>
	);

}

export default Projects;
