import React, { useEffect, useState } from "react";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const DropdownOptions = ({ className, options, setOptionIndex }) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

  useEffect(() => {
    setOptionIndex && setOptionIndex(currentOptionIndex);
  }, [currentOptionIndex]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className={className}
    >
      <Dropdown
        overlay={
          <Menu>
            {options.map(({ value, to }, index) =>
              to ? (
                <Link to={to}>
                  <Menu.Item
                    key={index}
                    onClick={() => setCurrentOptionIndex(index)}
                  >
                    {value}
                  </Menu.Item>
                </Link>
              ) : (
                <Menu.Item
                  key={index}
                  onClick={() => setCurrentOptionIndex(index)}
                >
                  {value}
                </Menu.Item>
              )
            )}
          </Menu>
        }
        trigger={["click"]}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {options[currentOptionIndex].value} <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};
