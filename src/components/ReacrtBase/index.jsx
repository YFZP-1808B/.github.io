import React from "react";
// 引入卡片组件
import { Card, Col, Row } from "antd";
import data from "./data.json";
export default props => {
  return (
    <div>
      <Row gutter={16}>
        {data.reactBase.map((item, index) => {
          return (
            <Col span={8} key={index}>
              <Card title={item.title} bordered={true}>
                {item.content}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};