import React, { useCallback, useState, useEffect } from "react";
import { Card, Table, Col, Row } from "antd";
import { categoryData } from "./data";

const Linkage2 = () => {
  const categoryColumns = [
    {
      dataIndex: "naSrvca",
      align: "left",
      ellipsis: true,
      render: (text) => <div>{text ? text : ""}</div>,
    },
  ];
  const [dataSource, setDataSource] = useState();
  const [subData, setSubData] = useState();
  const [thirdData, setThirdData] = useState();

  const handleRowClick = useCallback((row) => {
    setSubData(row.children || []);
    if (row.centralizedMedordSrvDtos) {
      setThirdData(row.centralizedMedordSrvDtos);
    } else {
      setThirdData(row.children[0].centralizedMedordSrvDtos || []);
    }
  }, []);

  const handleSubClick = useCallback((row) => {
    setThirdData(row.centralizedMedordSrvDtos);
  }, []);

  useEffect(() => {
    categoryData.data.forEach((item) => {
      if (item.centralizedMedordSrvDtos) {
        item.children = (item.children || []).concat({
          idPar: "other",
          idSrvca: "other",
          naSrvca: "其他",
          centralizedMedordSrvDtos: item.centralizedMedordSrvDtos,
        });
      }
    });
    setDataSource(categoryData.data);
    setSubData(categoryData.data[0].children);
    setThirdData(categoryData.data[0].centralizedMedordSrvDtos);
  }, []);

  return (
    <Row>
      <Col span={8}>
        <Card title="检查类别">
          <Table
            showHeader={false}
            striped={false}
            pagination={false}
            dataSource={dataSource}
            columns={categoryColumns}
            rowKey={(record) => record.idSrvca}
            expandable={{
              childrenColumnName: "null",
            }}
            onRow={(record) => ({
              onClick: () => {
                handleRowClick(record);
              },
            })}
          />
        </Card>
      </Col>

      <Col span={8}>
        <Card title="检查部位类型">
          <Table
            showHeader={false}
            striped={false}
            pagination={false}
            dataSource={subData}
            columns={categoryColumns}
            rowKey={(record) => record.idSrvca}
            expandable={{ defaultExpandAllRows: false }}
            onRow={(record) => ({
              onClick: () => {
                handleSubClick(record);
              },
            })}
          />
        </Card>
      </Col>

      <Col span={8}>
        <Card title="检查项目">
          <Table
            showHeader={false}
            striped={false}
            pagination={false}
            dataSource={thirdData}
            columns={categoryColumns}
            rowKey={(record) => record.idSrv}
            rowSelection={{type: "radio"}}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Linkage2;
