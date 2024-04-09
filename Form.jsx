import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [numSongs, setNumSongs] = useState(5);

  const handleSubmit = () => {
    onSearch(searchTerm, numSongs);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label={<span><span style={{ color: "red" }}>*</span> Search Term</span>}
      >
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Please enter a music artist to search"
        />
      </Form.Item>
      <Form.Item
        label={<span><span style={{ color: "red" }}>*</span> Limit</span>}
      >
        <Input
          type="number"
          min={1}
          max={20}
          value={numSongs}
          onChange={(e) => setNumSongs(e.target.value)}
          placeholder="Please let us know how many results you want (max of 20)"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
