import React, { useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const WordsTable = () => {
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
  const columns = [
    {
      title: "Character",
      dataIndex: "Character",
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
      dataIndex: "Pinyin",
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
      dataIndex: "English",
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
      dataIndex: "Sentence",
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
  ];
  return (
    <div>
      <header>
        <Table
          style={{
            display: "flex",
            flex: 1,
            margin: 10,
            justifyContent: "center",
          }}
          columns={columns}
          dataSource={dataSource}
        ></Table>
      </header>
    </div>
  );
};
