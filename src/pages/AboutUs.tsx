import React from 'react';
import { Card } from 'antd';

const AboutUs: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>关于我们</h1>
      <Card>
        <p>本系统旨在提供全面的城市管理服务，集成了气象监测、低空经济调度及信息发布功能。</p>
        <p>版本：1.0.0</p>
        <p>联系方式：contact@admin-system.com</p>
      </Card>
    </div>
  );
};

export default AboutUs;
