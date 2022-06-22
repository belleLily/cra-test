import React, { useState } from "react";
import { Card, Button } from "antd";
import Linkage from "./Linkage";
import Linkage2 from "./Linkage2";

const Home = () => {
  const [type, setType] = useState(false);
  const handleToggle = () => {
    setType(!type);
  };

  return (
    <Card>
      <Button onClick={handleToggle}>切换</Button>
      <p />
      {type ? <Linkage /> : <Linkage2 />}
    </Card>
  );
};

export default Home;
