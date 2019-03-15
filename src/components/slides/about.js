import React, { Component } from 'react';
import { Position, Tooltip } from "@blueprintjs/core";
import devIcons from '../../assets/devicons.js';

export default class About extends Component {
	renderIcons(iconList) {
		let int = 500;
		return iconList.map(icon => {
			int += 90;
			return(
				<div className="dev-icon" key={icon.name}>
					<Tooltip content={icon.name} position={Position.RIGHT}>
						<i className={icon.class + " wow fadeInUp"} data-wow-delay={int + "ms"}></i>
					</Tooltip>
	          	</div>
			)
		})
	}

	render() {
		return (
			<div className="section second">
				<p className="wow fadeInDown" data-wow-delay="400ms">Hello, I'm <strong>James Henderson!</strong> I'm a Full Stack Developer passionate about creating robust, responsive websites and applications. Here's an overview of some of the tools I've used:</p>
				<br />
				<ul className="dev-icons">{this.renderIcons(devIcons)}</ul>
	        </div>
		)
	}
}
