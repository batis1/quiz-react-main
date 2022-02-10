import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import CircleControls from "react-player-circle-controls";
import "react-player-circle-controls/dist/styles.css";
import { ButtonOptions } from "./ButtonOptions";
import Loading from "./Loading/Loading";
import Quiz from "./Quiz/Quiz";
import { SkillHeaderContainer } from "./SkillHeaderContainer/SkillHeaderContainer";
import { Tutorial } from "./Tutorial/Tutorial";
import "antd/dist/antd.css";
import { Link, useHistory } from "react-router-dom";
import { DropdownOptions } from "./DropdownOptions/DropdownOptions";
import { Typography, Divider, Popover, Button } from "antd";
// import { Popover, Button } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const { Title, Paragraph, Text } = Typography;

const Example = () => {
  const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [playerState, setPlayerState] = useState({
    played: 0,
    loaded: 0,
  });
  const options = [
    { value: "Reading", to: "/howtoplay" },
    { value: "Listening", to: "" },
    { value: "Writing", to: "" },
  ];

  const onSeek = (amount) => {
    if (player.current) {
      player.current.seekTo(amount, "fraction");
    }
  };
  const history = useHistory();
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
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "60vh",
    //   }}
    // >
    <>
      {/* <DropdownOptions options={options} />
      <SkillHeaderContainer /> */}

      <Popover content={content} title="Title" trigger="hover">
        <Text>你的爱好是什么?</Text>
      </Popover>
    </>
    // </div>
  );
};

export default Example;
