import React from 'react';
import { List, Typography } from 'antd';

const data = [
  '关于发布2023年年度报告的通知',
  '低空空域管理改革试点工作方案',
  '城市气象灾害预警信号发布与传播规定',
  '关于进一步优化营商环境的若干措施',
  '数字化转型发展白皮书',
];

const InformationDisclosure: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>信息公开</h1>
      <List
        header={<div>最新公告列表</div>}
        footer={<div>查看更多</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[通知]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default InformationDisclosure;
