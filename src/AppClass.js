import React, { Component } from "react";

class AppClass extends Component {
	state = {
		count: 0,
		isOn: false,
		x: null,
		y: null,
	};
	//setState can be buggy to make sure you get the correct state use updater funtion
	// incrementCount = () =>{
	//   this.setState({
	//     count: this.state.count + 1
	//   })
	// }
	//browser API's used in this are document, window, navigator, geolocation
	//type any browser API in console and you get an object
	//navigator.onLine shows if someone is online
	componentDidMount() {
		document.title = `You have been clicked ${this.state.count} times`;
		window.addEventListener("mousemove", this.handleMouseMove);
	}
	// to get this to work you have to use template literals as the '' the key is located under the escape key
	componentDidUpdate() {
		document.title = `You have been clicked ${this.state.count} times`;
	}
	//unmount/cleanup of side effect (not all have to do this but mouse is one that needs it)
	componentWillUnmount() {
		window.removeEventListener("mousemove", this.handleMouseMove);
	}
	handleMouseMove = (event) => {
		this.setState({
			x: event.pageX,
			y: event.pageY,
		});
	};
//  prevState b/c it is the updater function for setState in functional it is prevCount b/c the state is named count
	incrementCount = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	toggleLight = () => {
		this.setState((prevState) => ({
			isOn: !prevState.isOn,
		}));
	};

	render() {
		return (
			<>
				<h2>Counter AppClass</h2>
				<button onClick={this.incrementCount}>
					I was clicked {this.state.count} times
				</button>
				<h2>Toggle</h2>

				<img
					src={
						this.state.isOn
							? "https://icons-on-off.s3.amazonaws.com/on.jpg"
							: "https://icons-on-off.s3.amazonaws.com/off.jpg"
					}
					style={{
						height: "155px",
						width: "400px",
					}}
					alt="Flashlight"
					onClick={this.toggleLight}
				></img>

				<h2>Mouse Position</h2>
				<p>x posistion: {this.state.x}</p>
				<p>y posistion: {this.state.y}</p>
			</>
		);
	}
}
export default AppClass;
