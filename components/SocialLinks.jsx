import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			{socialLinks.url && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="white"
					rel="noopener"
					aria-label="URL"
					href={socialLinks.url}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-link" />
					</span>
				</Button>
			)}
			{socialLinks.youtube && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="youtube"
					rel="noopener"
					aria-label="Youtube"
					href={socialLinks.youtube}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-youtube" />
					</span>
				</Button>
			)}
			{socialLinks.tiktok && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="white"
					href={socialLinks.tiktok}
					rel="noopener"
					aria-label="TikTok"
					target="_blank"
				>
					<span className="btn-inner--icon">
					<Icon icon={"logos:tiktok-icon"} data-inline="false" ></Icon>
					</span>
				</Button>
			)}
			{socialLinks.instagram && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="instagram"
					href={socialLinks.instagram}
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-instagram" />
					</span>
				</Button>
			)}
			{/* {socialLinks.facebook && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="facebook"
					href={socialLinks.facebook}
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-facebook-square" />
					</span>
				</Button>
			)}	
			{socialLinks.twitter && (
				<Button
					className="btn-icon-only rounded-circle"
					color="twitter"
					href={socialLinks.twitter}
					target="_blank"
					rel="noopener"
					aria-label="Twitter"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-twitter" />
					</span>
				</Button>
			)} */}
		</div>
	);
};

export default SocialLinks;
