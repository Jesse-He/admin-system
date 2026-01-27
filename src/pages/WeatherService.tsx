import React from 'react';
import { Card, Table } from 'antd';

const columns = [
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '温度',
    dataIndex: 'temp',
    key: 'temp',
  },
  {
    title: '天气状况',
    dataIndex: 'condition',
    key: 'condition',
  },
];

const data = [
  {
    key: '1',
    city: '北京',
    temp: '22℃',
    condition: '晴',
  },
  {
    key: '2',
    city: '上海',
    temp: '24℃',
    condition: '多云',
  },
  {
    key: '3',
    city: '广州',
    temp: '28℃',
    condition: '雨',
  },
];

const WeatherService: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>气象服务</h1>
      <Card title="实时天气数据">
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

export default WeatherService;
