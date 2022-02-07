import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import CircleControls from "react-player-circle-controls";
import "react-player-circle-controls/dist/styles.css";
import Loading from "./Loading/Loading";

const Example = () => {
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [playerState, setPlayerState] = useState({
    played: 0,
    loaded: 0,
  });

  const onSeek = (amount) => {
    if (player.current) {
      player.current.seekTo(amount, "fraction");
    }
  };

  const [data, setData] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/questions/6200a878ec9bba48c06c9b7d"
        );

        setData({
          ...data.doc,
          audioUrl: data.doc.audioUrl.substring(
            data.doc.audioUrl.indexOf("/uploads")
          ),
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      {!data ? (
        <Loading></Loading>
      ) : (
        <>
          <ReactPlayer
            ref={player}
            // url={URL.createObjectURL(
            //   new File(
            //
            //   )
            // )}
            // url="/uploads/H41009.mp3"
            url={data.audioUrl}
            // mp3=""
            playing={playing}
            height="0"
            width="0"
            onProgress={setPlayerState}
            onEnded={() => setPlaying(false)}
          />
          <CircleControls
            played={playerState.played}
            loaded={playerState.loaded}
            playing={playing}
            onSeek={onSeek}
            onTogglePlaying={() => setPlaying(!playing)}
          />
        </>
      )}
    </div>
  );
};

export default Example;
