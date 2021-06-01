import React, { useState, useEffect } from "react";

import {
    Link
  } from "react-router-dom";

const initialLocationState = {
	latitude: null,
	longitude: null,
	speed: null,
};

export const HooksExamples = () => {
	const [count, setCount] = useState(0);
	const [isOn, setIsOn] = useState(false);
	const [mousePosition, setmousePosition] = useState({ x: null, y: null });
	const [status, setstatus] = useState(navigator.onLine);
	const [{ latitude, longitude, speed }, setLocation] = useState(
		initialLocationState
	);

	let mounted = true;

	useEffect(() => {
		document.title = `You have clicked ${count} times`;
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		navigator.geolocation.getCurrentPosition(handleGeoLocation);
		const watchId = navigator.geolocation.watchPosition(handleGeoLocation);
		return () => {
			mounted = false;
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
			navigator.geolocation.clearWatch(watchId);
		};
	}, [count]);

	const handleGeoLocation = (event) => {
		if (mounted) {
			setLocation({
				latitude: event.coords.latitude,
				longitude: event.coords.longitude,
				speed: event.coords.speed,
			});
		}
	};

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const toggleSwitch = () => {
		setIsOn((prevIsOn) => !prevIsOn);
	};

	const handleMouseMove = (event) => {
		setmousePosition({
			x: event.pageX,
			y: event.pageY,
		});
	};

	const handleOnline = () => {
		setstatus(true);
	};
	const handleOffline = () => {
		setstatus(false);
	};
	return (
		<>
		<div className="Back">
            <Link to="/" className="Back-link">
               Back 
            </Link>
        </div>
			<h2>Counter</h2>
			<button onClick={incrementCount}>I was clicked {count} times</button>
			<h2>Toggle</h2>
			<img
				src={
					isOn
						? "https://icons-on-off.s3.amazonaws.com/on.jpg"
						: "https://icons-on-off.s3.amazonaws.com/off.jpg"
				}
				style={{
					height: "155px",
					width: "400px",
				}}
				alt="Flashlight"
				onClick={toggleSwitch}
			></img>
			<h2>Mouse Position</h2>
			<div>Using stringify <br/>
			{JSON.stringify(mousePosition, null, 2)}
			</div>
			<div>
				Using state
			<p>x posistion: {mousePosition.x}</p>
			<p>y posistion: {mousePosition.y}</p>
			</div>
			<h2>Network Status</h2>
			<p>You are {status ? "online" : "offline"}</p>

			<h2>GeoLocation</h2>
			<p>Latitude is {latitude}</p>
			<p>longitude is {longitude}</p>
			<p>Your speed is {speed ? speed : "0"} because you are not moving</p>
		</>
	);
};

