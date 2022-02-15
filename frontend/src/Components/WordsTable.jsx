import React, { useContext, useEffect, useState } from "react";
import { Table, Button, Space, Input } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { GlobalContext } from "../App";
import Loading from "./Loading/Loading";
import useLocalStorage from "use-local-storage";
import { useHistory } from "react-router-dom";

export const WordsTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
    {
      Character: "你好",
      Pinyin: "ni hao",
      English: "Hello",
      Sentence: "老师，你好",
    },
  ]);

  const {
    state: { lessonId, user },
    dispatch,
  } = useContext(GlobalContext);

  const [userLocal, setUser] = useLocalStorage("user", user);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let apiUrl = "http://localhost:5000/words";
      if (lessonId) {
        apiUrl = `${apiUrl}?lessonId=${lessonId}`;
      } else {
        apiUrl = `${apiUrl}?userId=${user._id}`;
      }

      const {
        data: { docs },
      } = await axios.get(apiUrl);
      setIsLoading(false);

      // setDataSource(
      //   docs.map(({ character, pinyin }) => ({ Character: character,Pin }))
      // );

      setDataSource(docs);
    })();
  }, []);

  const history = useHistory();
  const handleSaveWord = async (newWordId) => {
    const newSavedWord = user.savedWords.map((_id) => _id);
    newSavedWord.push(newWordId);
    const { data } = await axios.put(`http://localhost:5000/user/${user._id}`, {
      savedWords: newSavedWord,
    });
    console.log({ newSavedWord, data });
  };

  const handleDeleteSavedWord = async (wordId) => {
    setIsLoading(true);
    const savedWordAfterD = user.savedWords.filter((_id) => _id !== wordId);
    // newSavedWord.push(wordId);
    const { data } = await axios.put(`http://localhost:5000/user/${user._id}`, {
      savedWords: savedWordAfterD,
    });
    setDataSource(savedWordAfterD);
    console.log({ savedWordAfterD });

    // window.location.reload(false);
    history.push("/");
    history.push("/lesson");

    setIsLoading(false);
  };

  const columns = [
    {
      title: "Character",
      dataIndex: "character",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.Character.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Pinyin",
      dataIndex: "pinyin",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.Pinyin.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "English Translation",
      dataIndex: "englishTranslation",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.English.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Sentence",
      dataIndex: "sentence",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.Sentence.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Action",
      key: "action",
      render: (item) =>
        dataSource.length >= 1 ? (
          lessonId ? (
            <button className="btn" onClick={() => handleSaveWord(item._id)}>
              save
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => handleDeleteSavedWord(item._id)}
            >
              delete
            </button>
          )
        ) : null,
    },
  ];
  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div>
      <header>
        <Table
          style={{
            display: "flex",
            flex: 1,
            margin: 10,
            justifyContent: "center",
          }}
          rowClassName={() => "editable-row"}
          columns={columns}
          dataSource={dataSource}
        ></Table>
      </header>
    </div>
  );
};
