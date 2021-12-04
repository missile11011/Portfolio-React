import React from "react";
import { Image } from "react-bootstrap";
import "../index.css";
function About() {
	return (
		<>
			<img
				class="img-fluid w-100 vh-100"
				src={process.env.PUBLIC_URL + '/images/AdobeStock_190318318.jpeg' } 
				alt="gradeint background"
			/>
			<div class="overly-img card-img-overlay center-heroku ">
				<h1 id="hero1" class="line-1 m-auto align-items-center">
					Hello I'm Misael Reyes
				</h1>
				<br />
				<h1 id="hero2" class="line-2 m-auto align-items-center">
					I'm a Web Developer
				</h1>
			</div>

			<article
				id="About-me"
				class=" flex-wrap row align-items-center justify-content-center container-fluid"
			>
				<img
					id="portrait"
					class="rounded-circle col-md-3 py-3"
					src="https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif"
					alt="portrait picture"
				/>
				<div class="col-8">
					<h2 class="text-center inline-flex">About Me</h2>
					<p>
						Hello my name is Misael Reyes and I’m a self taught
						software developer and web developer for a year. Then I
						got my certificate for coding at SMU. Reasons why you
						should choose me I'm responsive, bilingual, and flexible
						to an extant. When you have a question or change I would
						happily response within the hour.
					</p>
				</div>
			</article>
		</>
	);
}

export default About;