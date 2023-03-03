import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
	return skillsSection && (
		<Container className="text-center my-5 section section-lg">
			<h1 className="h1">{skillsSection.title}</h1>
			<p className="lead">{skillsSection.subTitle}</p>
			{skillsSection.data.map((section, index) => {
				return (
					<Row className="my-5" key={index}>
						<Col lg="6" className="order-2 order-lg-1">
							<Fade left duration={2000}>
								<DisplayLottie
									animationPath={section.lottieAnimationFile}
								/>
							</Fade>
						</Col>
						<Col lg="6" className="order-1 order-lg-2">
							<Fade right duration={2000}>
								<h3 className="h3 mb-2">{section.title}</h3>
								<div>
									{section.skills.map((skill, i) => {
										return <p key={i}>{skill}</p>;
									})}
								</div>
							</Fade>
						</Col>
					</Row>
				);
			})}
		</Container>
	);
};

export default Skills;
