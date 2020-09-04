import React from "react";
import "./PomodoroClock.css";

const PomodoroClock = () => {
	const audio = document.getElementById("beep");
	const [breakLength, setBreakLength] = React.useState(5);
	const [sessionLength, setSessionLength] = React.useState(25);
	const [timerLength, setTimerLength] = React.useState(10);
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [intervalId, setIntervalId] = React.useState();
	const [isSession, setIsSession] = React.useState(true);

	React.useEffect(() => {
		console.log("use efffect timerlength " + timerLength);
		if (timerLength === 0) {
			console.log("audio");
			//audio.play()
			// clearInterval(intervalId);
			// setIsPlaying(false);
			if (isSession) {
				setTimerLength(breakLength * 60);
				setIsSession(false);
			} else {
				setTimerLength(sessionLength * 60);
				setIsSession(true);
			}
		}
	}, [timerLength, breakLength, isSession, sessionLength]);

	const convertTime = () => {
		let mins = Math.floor(timerLength / 60);
		mins = mins < 10 ? "0" + mins : mins;
		let secs = timerLength % 60;
		secs = secs < 10 ? "0" + secs : secs;
		return mins + ":" + secs;
	};

	const start = () => {
		if (!isPlaying) {
			let id = setInterval(decrementTime, 1000);
			setIntervalId(id);
			setIsPlaying(true);
		} else {
			clearInterval(intervalId);
			setIsPlaying(false);
		}
	};

	const decrementTime = () => {
		setTimerLength((timerLength) => timerLength - 1);
	};

	const reset = () => {
		clearInterval(intervalId);
		// audio.pause();
		// audio.currentTime=0
		setTimerLength(25 * 60);
		setBreakLength(5);
		setSessionLength(25);
		setIsPlaying(false);
		setIsSession(true);
	};
	console.log("rerender");

	const increaseBreak = () => {
		if (isSession && breakLength < 60)
			setBreakLength((breakLength) => breakLength + 1);
		else if (!isSession && !isPlaying && breakLength < 60) {
			setBreakLength((breakLength) => breakLength + 1);
			setTimerLength((breakLength + 1) * 60);
		}
	};
	const decreaseBreak = () => {
		if (isSession && breakLength > 1)
			setBreakLength((breakLength) => breakLength - 1);
		else if (!isSession && !isPlaying && breakLength > 1) {
			setBreakLength((breakLength) => breakLength - 1);
			setTimerLength((breakLength - 1) * 60);
		}
	};
	const increaseSession = () => {
		if (!isSession && sessionLength < 60)
			setSessionLength((sessionLength) => sessionLength + 1);
		else if (isSession && !isPlaying && sessionLength < 60) {
			setSessionLength((sessionLength) => sessionLength + 1);
			setTimerLength((sessionLength + 1) * 60);
		}
	};
	const decreaseSession = () => {
		if (!isSession && sessionLength > 1)
			setSessionLength((sessionLength) => sessionLength - 1);
		else if (isSession && !isPlaying && sessionLength > 1) {
			setSessionLength((sessionLength) => sessionLength - 1);
			setTimerLength((sessionLength - 1) * 60);
		}
	};

	return (
		<div id="pomodoro">
			<div id="header">Pomodoro Clock</div>
			<div id="lengths">
				<div id="break">
					<div id="break-label">Break Length</div>
					<div id="break-buttons">
						<button
							id="break-increment"
							class="button"
							onClick={increaseBreak}
						>
							<i className="fa fa-plus" />
						</button>
						<span id="break-length">{breakLength}</span>
						<button
							id="break-decrement"
							class="button"
							onClick={decreaseBreak}
						>
							<i className="fa fa-minus" />
						</button>
					</div>
				</div>
				<div id="session">
					<div id="session-label">Session Length</div>
					<div id="session-buttons">
						<button
							id="session-increment"
							class="button"
							onClick={increaseSession}
						>
							<i className="fa fa-plus" />
						</button>
						<span id="session-length">{sessionLength}</span>
						<button
							id="session-decrement"
							class="button"
							onClick={decreaseSession}
						>
							<i className="fa fa-minus" />
						</button>
					</div>
				</div>
			</div>

			<div id="timerBox">
				<div id="timer">
					<div id="timer-label">
						{" "}
						{isSession ? "Session" : "Break"}{" "}
					</div>
					<div id="time-left">{convertTime()}</div>
				</div>

				<div id="buttons">
					<button id="start_stop" class="button" onClick={start}>
						<i
							className={`fa fa-${isPlaying ? "pause" : "play"}`}
						/>
					</button>
					<button id="reset" class="button" onClick={reset}>
						<i className="fa fa-refresh" />
					</button>
				</div>
			</div>
		</div>
	);
};
export default PomodoroClock;
