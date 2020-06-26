import React, { useState, useEffect, useRef } from "react";
import "./DrumMachine.css";

const DrumMachine = () => {
  const [displayString, setDisplayString] = useState("Drum Machine");

  useEffect(() => {
    document.addEventListener("keydown", handler);

    return () => {
      console.log("return useEffect");
      document.removeEventListener("keydown", handler);
    };
  });

  const handler = (e) => {
    console.log("event listener registered");
    let keypress = String.fromCharCode(e.keyCode);
    let audioElement = document.getElementById(keypress);
    let displayElement = document.getElementById("display");
    console.log(String.fromCharCode(e.keyCode));
    if (audioElement) {
      audioElement.play();
      displayElement.innerText = audioElement.parentNode.id;
    }
  };

  const data = [
    {
      id: "Heater 1",
      letter: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "Heater 2",
      letter: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "Heater 3",
      letter: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "Heater 4",
      letter: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "clap",
      letter: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "open HH",
      letter: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Kick n Hat",
      letter: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "Kick",
      letter: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "Closed HH",
      letter: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const display = (key) => {
    setDisplayString(key);
  };

  return (
    <div id="drum-machine">
      <div id="display">{displayString}</div>
      <div id="drumpad">
        {data.map((d) => (
          <Drumpad letter={d.letter} src={d.src} id={d.id} display={display} />
        ))}
      </div>
    </div>
  );
};

const Drumpad = (props) => {
  //   React.useEffect(()=>{
  //       document.addEventListener("keydown",(e)=>{
  //  let keypress=String.fromCharCode(e.keyCode);  console.log(String.fromCharCode(e.keyCode));
  //   if(props.letter==keypress){
  //     audioRef.current.play();
  //      audioRef.current.currenttime=0;
  //     console.log(audioRef.current);
  //   }
  // })
  //   },[])

  const playAudio = (e) => {
    props.display(props.id);
    audioRef.current.play();
    audioRef.current.currenttime = 0;
    console.log(audioRef.current.id);
  };
  const audioRef = useRef(null);
  return (
    <div className="drum-pad" id={props.id} onClick={playAudio}>
      <audio
        class="clip"
        id={props.letter}
        src={props.src}
        ref={audioRef}
      ></audio>
      {props.letter}
    </div>
  );
};

export default DrumMachine;

// #root{
//     display:flex;
//     align-items:center;
//     justify-content:center;
//   }
