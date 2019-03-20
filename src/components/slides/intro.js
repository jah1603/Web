import React, { Component } from 'react';
import WOW from 'wowjs';

const name  = { color: 'white' };
const divider = { color: 'white' };
const marginTop = { marginTop: '12px' };

export default class Intro extends Component {
	constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

	componentDidMount() {
		new WOW.WOW({
	        live: false
	    }).init();

			setTimeout(() => {
				this.writeText("FULL STACK DEVELOPER");
			}, 1000);

		setTimeout(() => {
			this.setState({
				android: {height: "50", width: "50"},
				apple: {height: "50", width: "50"},
				blog: {height: "50", width: "50"}
			})
		}, 100);

		setTimeout(() => {
			let page = this.props.fullpageApi.getActiveSection();
			if (page.index === 0) {
				this.props.moveDown();
			}
		}, 4400)
	}

	writeText(content) {
		let i = 0;
		let contentArray = content.split("");
		let text = '';
		setInterval(() => {
			if (i < contentArray.length) {
				text += contentArray[i];
				this.setState({ text });
				i++;
			}
		}, 100)
	}

	render() {
		return(
			<div style={{height: 450}} className="section first">
				<div className="text-container wow fadeInDown" data-wow-delay="100ms">
	        		<h1 style={name}>JAMES<span style={divider}>/</span>HENDERSON</h1>
	        		<p style={marginTop}>
	        			{this.state.text}
	        			<span id="holder"></span><span className="blinking-cursor">|</span>
	        		</p>

							<div className="text-container wow fadeInDown" data-wow-delay="100ms">
							<a className="text-container wow fadeInDown" data-wow-delay="100ms" href="https://play.google.com/store/apps/developer?id=LevelApps+Edinburgh" className="us_link" target="_blank">
								<img className="contact-icon wow fadeInDown" data-wow-delay="100ms"  src={require("../../assets/android.png")} alt="Android Store Link" width={this.state.android ? this.state.android.width : 0} height={this.state.android ? this.state.android.width : 0} ></img>
							</a>

							<a className="text-container wow fadeInDown" data-wow-delay="100ms" href="https://itunes.apple.com/us/app/n%C3%BCv/id1455339660?ls=1&mt=8" className="us_link" target="_blank">
								<img className="contact-icon wow fadeInDown" data-wow-delay="100ms" src={require("../../assets/apple.png")} alt="Apple Store Link" width={this.state.android ? this.state.android.width : 0} height={this.state.android ? this.state.android.width : 0}></img>
							</a>

							<a className="text-container wow fadeInDown" data-wow-delay="100ms" href="https://jah1603.github.io" className="us_link" target="_blank">
								<img className="contact-icon wow fadeInDown" data-wow-delay="100ms" src={require("../../assets/blog.png")} alt="Blog Link" width={this.state.android ? this.state.android.width : 0} height={this.state.android ? this.state.android.width : 0}></img>
							</a>
							</div>

	        	</div>
	        	<i id="moveDown" className="fa fa-chevron-down fa-3x bounce" onClick={() => this.props.moveDown()}></i>
	        </div>
		)
	}
}
