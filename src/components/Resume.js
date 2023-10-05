import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Nav from './nav';
//import JobDescription from './JobDescription';

class Resume extends Component {
	render() {
		return (
			// <div>
			// 	<h1>Resume</h1>
			// 	<Grid>
			// 		<Cell col={4}>
			// 			{/**<div style={{textAlign: 'center'}}>
			// 			<img 
			// 			  src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
			// 			  alt="avatar"
			// 			  style={{height:'200px'}}
			// 			/>
			// 			</div>*/}

			// 			<h2 style={{ paddingTop: "2rem" }}> Victory Esim </h2>

			// 			<p>
			// 			Hardworking and versatile Computer Engineering graduate with excellent attention
			// 			 to detail, a keen interest in learning and a strong sense for aesthetics and interactions. 
			// 			 Passionate about software development and looking for a challenging role where I can express 
			// 			 my creativity and improve my technical abilities while providing the utmost customer satisfaction.
			// 			</p>

			// 			<h2>Soft Skills</h2>
			// 			<p>
			// 				<li>Excellent communication skills </li>
			// 				<li>Excellent ability to analyze, interpret and address customer needs.</li>
			// 				<li>Detail-oriented and motivated</li>
			// 				<li>Eager to learn and develop new skills</li>
			// 				<li>Ability to be flexible and adaptable</li>

			// 			</p>

			// 		</Cell>

			// 		<Cell className="resume-right-col" col={8}>
			// 			{/********************Education Section*********************/}
			// 			<h2> Education</h2>
			// 			<Education
			// 				startYear={2012}
			// 				endYear={2018}
			// 				schoolName="University of Ottawa"
			// 				programDescription="Bachelor of Applied Science in Computer Engineering (Co-Op)"
			// 			/>
			// 			<hr style={{ borderTop: "3px solid #FFB6C1" }} />
			// 			{/********************Experience Section********************/}
			// 			<h2>Experience</h2>

			// 			<Experience
			// 				startMonthYear="July 2020"
			// 				endMonthYear="January 2023"
			// 				jobName="Senior Technical Associate - Phreesia Inc."
			// 				jobDescription1="Proactively engaged in troubleshooting and resolving technical issues related to API integrations for the Patient Management Intake software and advised clients on best practice"
			// 				jobDescription2="Searched and retrieved data from various databases as part of the troubleshooting process"
			// 				jobDescription3="Provided an outstanding experience to customers throughout the support process ensuring that SLAs were met, decreasing resolution time by over 10%" 
			// 				jobDescription4="Worked collaboratively with other senior resources to drive product understanding and knowledge"
			// 			/>

			// 			<Experience
			// 				startMonthYear="November 2019"
			// 				endMonthYear="July 2020"
			// 				jobName="Sales Associate - Talbots Canada"
			// 				jobDescription1="Demonstrated a high level of customer service skills to achieve sales"
			// 				jobDescription2="Collaborated with team members to create and advance a culture of hospitality in the store"
			// 				jobDescription3="Demonstrated forward-thinking and solution-orientation in order to meet customers needs"
			// 				jobDescription4="Participated in fund-raising for the Dress for Success initiative to empower women returning to the workforce"
			// 			/>

			// 			<Experience
			// 				startMonthYear="September 2018"
			// 				endMonthYear="December 2018"
			// 				jobName="Salesperson - Nordstrom Rack"
			// 				jobDescription1="Surpassed daily sales targets by an average of 25% through efficiently and imaginatively merchandizing the sales floor and providing excellent customer service"
			// 				jobDescription2="Reorganized the store inventory, making the system 20% more efficient than before" 
			// 				jobDescription3="Took initiative to recover and replenish merchandise, so it was available to sell"
			// 				jobDescription4="Provided support to fellow employees through sharing of knowledge, helping to complete tasks and assisting in customer interactions"
			// 			/>

			// 			<Experience
			// 				startMonthYear="January 2015"
			// 				endMonthYear="December 2015"
			// 				jobName="QA Analyst (Co-Op) - Ministry of Health and Long-term Care"
			// 				jobDescription1="Provided technical support for the development team resulting in the successful deployment of two releases of the Panorama software into production"
			// 				jobDescription2="Performed regression testing and user acceptance testing for new software features to ensure software stability"
			// 				jobDescription3="Prepared detailed, comprehensive and well-structured test cases based on information provided in Detailed Business Requirements (DBRs)"
			// 			/>


			// 			<hr style={{ borderTop: "3px solid #FFB6C1" }} />
			// 			{/********************Skills Section********************/}
			// 			<h2>Software Skills/Technologies</h2>
			// 			<Skills skill="JavaScript" progress={55} />
			// 			<Skills skill="HTML/CSS/SASS" progress={55} />
			// 			<Skills skill="React" progress={45} />
			// 			<Skills skill="Bootstrap" progress={50} />
			// 			<Skills skill="Git" progress={60} />
			// 			<Skills skill="Java" progress={60} />
			// 			<Skills skill="UX Prototyping" progress={55} />
			// 			<Skills skill="Wireframing" progress={55} />
			// 			<Skills skill="Adobe Photoshop" progress={50} />
			// 			<Skills skill="Adobe XD" progress={55} />
			// 		</Cell>
			// 	</Grid>
			// </div>
			<div className="resume-page">
				<h1 className="resume-page__heading">Resume</h1>
				<div className="resume-section resume-section-1">
					<h2> Victory Esim </h2>

					<p>
						Hardworking and versatile Computer Engineering graduate with excellent attention
						to detail, a keen interest in learning and a strong sense for aesthetics and interactions.
						Passionate about software development and looking for a challenging role where I can express
						my creativity and improve my technical abilities while providing the utmost customer satisfaction.
					</p>
				</div>

				<div className="resume-section resume-section-2">
					<h2>Soft Skills</h2>
					<p>
						<li>Excellent communication skills </li>
						<li>Excellent ability to analyze, interpret and address customer needs.</li>
						<li>Detail-oriented and motivated</li>
						<li>Eager to learn and develop new skills</li>
						<li>Ability to be flexible and adaptable</li>

					</p>
				</div>

				<div className="resume-section resume-section-3">
					{/********************Education Section*********************/}
					<h2> Education</h2>
					<Education
						startYear={2012}
						endYear={2018}
						schoolName="University of Ottawa"
						programDescription="Bachelor of Applied Science in Computer Engineering (Co-Op)"
					/>
				</div>

				<div className="resume-section resume-section-4">
					{/********************Experience Section********************/}
					<h2>Experience</h2>

					<Experience
						startMonthYear="July 2020"
						endMonthYear="January 2023"
						jobName="Senior Technical Associate - Phreesia Inc."
						jobDescription1="Proactively engaged in troubleshooting and resolving technical issues related to API integrations for the Patient Management Intake software and advised clients on best practice"
						jobDescription2="Searched and retrieved data from various databases as part of the troubleshooting process"
						jobDescription3="Provided an outstanding experience to customers throughout the support process ensuring that SLAs were met, decreasing resolution time by over 10%"
						jobDescription4="Worked collaboratively with other senior resources to drive product understanding and knowledge"
					/>

					<Experience
						startMonthYear="November 2019"
						endMonthYear="July 2020"
						jobName="Sales Associate - Talbots Canada"
						jobDescription1="Demonstrated a high level of customer service skills to achieve sales"
						jobDescription2="Collaborated with team members to create and advance a culture of hospitality in the store"
						jobDescription3="Demonstrated forward-thinking and solution-orientation in order to meet customers needs"
						jobDescription4="Participated in fund-raising for the Dress for Success initiative to empower women returning to the workforce"
					/>

					<Experience
						startMonthYear="September 2018"
						endMonthYear="December 2018"
						jobName="Salesperson - Nordstrom Rack"
						jobDescription1="Surpassed daily sales targets by an average of 25% through efficiently and imaginatively merchandizing the sales floor and providing excellent customer service"
						jobDescription2="Reorganized the store inventory, making the system 20% more efficient than before"
						jobDescription3="Took initiative to recover and replenish merchandise, so it was available to sell"
						jobDescription4="Provided support to fellow employees through sharing of knowledge, helping to complete tasks and assisting in customer interactions"
					/>

					<Experience
						startMonthYear="January 2015"
						endMonthYear="December 2015"
						jobName="QA Analyst (Co-Op) - Ministry of Health and Long-term Care"
						jobDescription1="Provided technical support for the development team resulting in the successful deployment of two releases of the Panorama software into production"
						jobDescription2="Performed regression testing and user acceptance testing for new software features to ensure software stability"
						jobDescription3="Prepared detailed, comprehensive and well-structured test cases based on information provided in Detailed Business Requirements (DBRs)"
					/>

				</div>

				{/********************Skills Section********************/}
				<div className="resume-section resume-section-5">
			
					<h2>Software Skills/Technologies</h2>
					<Skills skill="JavaScript" />
					<Skills skill="HTML/CSS/SASS" />
					<Skills skill="React" />
					<Skills skill="Bootstrap"/>
					<Skills skill="Git" />
					<Skills skill="Java" />
					<Skills skill="UX Prototyping"  />
					<Skills skill="Wireframing" />
					<Skills skill="Adobe Photoshop" />
					<Skills skill="Adobe XD" />
				</div>
					
			</div>
		);
	}
}

export default Resume;
