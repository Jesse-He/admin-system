import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>信息综合展示平台</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic
              title="访问量"
              value={112893}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic
              title="活跃用户"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="总用户数" value={93482} prefix={"👤"} />
          </Card>
        </Col>
      </Row>
      
      <div style={{ marginTop: '24px' }}>
        <Card title="系统公告">
          <p>欢迎使用新版后台管理系统。</p>
          <p>气象服务模块已更新。</p>
          <p>低空经济数据正在同步中。</p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
