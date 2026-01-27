import React from 'react';
import { Card, Descriptions, Badge } from 'antd';

const LowAltitudeEconomy: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>低空经济</h1>
      <Card title="无人机物流监控">
        <Descriptions title="任务 #10239" bordered>
          <Descriptions.Item label="无人机ID">UAV-2023-X9</Descriptions.Item>
          <Descriptions.Item label="当前状态">
            <Badge status="processing" text="飞行中" />
          </Descriptions.Item>
          <Descriptions.Item label="预计到达时间">14:30:00</Descriptions.Item>
          <Descriptions.Item label="载重">2.5kg</Descriptions.Item>
          <Descriptions.Item label="飞行高度">120m</Descriptions.Item>
          <Descriptions.Item label="电池电量">78%</Descriptions.Item>
          <Descriptions.Item label="当前坐标">
            E 116.397, N 39.908
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default LowAltitudeEconomy;
