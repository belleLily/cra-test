import React, { useCallback, useState, useEffect } from "react";
import { Card, Table, Col, Row } from "antd";
import { categoryData } from "./data";

const Linkage = () => {
  const categoryColumns = [
    {
      dataIndex: "name",
      align: "left",
      ellipsis: true,
      render: (text) => <div>{text ? text : ""}</div>,
    },
  ];

  const [dataSource, setDataSource] = useState(categoryData);

  const transforData = (arr, index, subIndex, row) => {
    const newData = [];
    arr.forEach((item, itemIdx) => {
      //当前点击项之后的每项都需进行替换（上一项的next属性，赋值给下一项的data属性）
      //TODO，index === 0的特殊条件
      if (itemIdx > index) {
        let nextData = arr[index]?.data[subIndex]?.next || [];
        let loopIndex = itemIdx;
        while (index === 0 && loopIndex > 1 && loopIndex < arr.length) {
          loopIndex--;
          nextData = nextData[0]?.next || [];
        }
        newData.push({
          ...item,
          data: index === 0 ? nextData : row.next,
        });
      } else {
        newData.push(item);
      }
    });
    return newData;
  };

  const handleRowClick = useCallback((row, index, subIndex) => {
    setDataSource((pre) => {
      return transforData(pre, index, subIndex, row)
    });
  }, []);

  useEffect(() => {
    setDataSource(transforData(categoryData, 0, 0));
  }, []);

  return (
    <Row>
      {dataSource.map((item, index) => (
        <Col key={item.label} span={Math.round(24 / categoryData.length)}>
          <Card title={item.label}>
            <Table
              showHeader={false}
              striped={false}
              pagination={false}
              dataSource={item.data}
              columns={categoryColumns}
              rowKey="id"
              expandable={{
                childrenColumnName: item.showChildren ? item.children : "null",
              }}
              onRow={(row, subIndex) => ({
                onClick: () => {
                  handleRowClick(row, index, subIndex);
                },
              })}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Linkage;
