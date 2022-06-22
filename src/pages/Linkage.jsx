import React, { memo, useCallback, useState } from "react";
import { Card, Table, Col, Row } from "antd";
import { categoryData } from "./data";

const Linkage = () => {
  const categoryColumns = [
    {
      dataIndex: "naSrvca",
      align: "left",
      ellipsis: true,
      render: (text) => <div>{text ? text : ""}</div>,
    },
  ];
  const [centralizedMedordSrvDtos, setCentralizedMedordSrvDtos] = useState(
    categoryData.data[0].centralizedMedordSrvDtos
  );
  const handleRowClick = useCallback((row) => {
    setCentralizedMedordSrvDtos(row.centralizedMedordSrvDtos);
  }, []);

  return (
    <Row>
      <Col span={12}>
        <Card title="检查类别">
          <Table
            showHeader={false}
            striped={false}
            pagination={false}
            dataSource={categoryData.data}
            columns={categoryColumns}
            rowKey={(record) => record.idSrvca}
            expandable={{ defaultExpandAllRows: false }}
            onRow={(record) => ({
              onClick: () => {
                handleRowClick(record);
              },
            })}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="检查项目">
          <Table
            showHeader={false}
            striped={false}
            pagination={false}
            dataSource={centralizedMedordSrvDtos}
            columns={categoryColumns}
            rowKey={(record) => record.idSrv}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default memo(Linkage);
