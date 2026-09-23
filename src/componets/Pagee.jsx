import { useRef, useState } from "react";
import "../css/Pagee.css";
import image from "../assets/1.jpeg";
import music from "../assets/music.mp3";


function Pagee() {
    const handleBack = () => {
        setShow(false);

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };
    const [show, setShow] = useState(false);
    const audioRef = useRef(null);

    const handleClick = () => {
        setShow(true);

        if (audioRef.current) {
            audioRef.current
                .play()
                .catch((error) => {
                    console.log("Music could not play:", error);
                });
        }
    };

    return (

        <div className={`page ${show ? "revealed" : ""}`}>

            <div className="background-glow glow-one"></div>
            <div className="background-glow glow-two"></div>

            <div className="content">

                {!show ? (
                    <>
                        <div className="heart">❤️</div>

                        <h1>
                            I Have Something
                            <br />
                            <span>Special For You</span>
                        </h1>

                        <p className="subtitle">
                            Click the button below to reveal it...
                        </p>

                        <button
                            className="reveal-button"
                            onClick={handleClick}
                        >
                            <span>✨</span>
                            Click to Reveal
                            <span>❤️</span>
                        </button>
                    </>
                ) : (

                    <div className="reveal-content">

                        <div className="image-wrapper">

                            <div className="image-glow"></div>

                            <img
                                src={image}
                                alt="Special"
                                className="special-image"
                            />

                        </div>
                        <button
                            className="back-button"
                            onClick={handleBack}
                        >
                            ← Back
                        </button>
                        <div className="music-icon">
                            🎵
                        </div>

                        <h1 className="message">
                            You Are Beautiful ❤️
                        </h1>

                        <div className="music-playing">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                            <label>
                                Music Playing...
                            </label>
                        </div>

                    </div>

                )}

            </div>

            <audio
                ref={audioRef}
                src={music}
                loop
            />

        </div>
    );
}

export default Pagee;