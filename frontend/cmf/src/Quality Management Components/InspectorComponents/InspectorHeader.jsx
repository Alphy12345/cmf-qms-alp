import React from 'react';
import { Space, Button, Tag, Typography, Divider } from 'antd';
import { LeftOutlined, SaveOutlined, ExportOutlined, InfoCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Text, Title } = Typography;

const InspectorHeader = ({ projectName = "STANDARD NUT M10", componentName = "GEAR_HUB_HOUSING_RD4", fileName = "GearHub_Assembly_B03.pdf", mode = "PLAN" }) => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      height: '60px', 
      padding: '0 20px', 
      background: '#fff', 
      borderBottom: '1px solid #f0f0f0', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      zIndex: 10
    }}>
      <Space size="large" align="center">
        <Button 
          type="text" 
          icon={<LeftOutlined />} 
          onClick={() => navigate(-1)}
          style={{ fontWeight: 600, fontSize: '12px' }}
        >
          BACK
        </Button>
        <Divider type="vertical" style={{ height: '30px' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text type="secondary" style={{ fontSize: '10px', textTransform: 'uppercase' }}>Project Context</Text>
          <Text strong style={{ fontSize: '13px' }}>{projectName}</Text>
        </div>
        
        <Divider type="vertical" style={{ height: '30px' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1890ff' }}></div>
            <Text type="secondary" style={{ fontSize: '10px', textTransform: 'uppercase' }}>Active Component</Text>
          </div>
          <Text strong style={{ fontSize: '13px' }}>{componentName}</Text>
        </div>
        
        <Divider type="vertical" style={{ height: '30px' }} />
        
        <Text type="secondary" style={{ fontSize: '13px', fontStyle: 'italic' }}>{fileName}</Text>
      </Space>

      <Space size="middle">
        <div style={{ background: '#f5f5f5', padding: '4px', borderRadius: '6px', display: 'flex', gap: '4px' }}>
          <Button 
            size="small" 
            type={mode === "PLAN" ? "primary" : "text"}
            style={{ fontSize: '12px', minWidth: '70px', height: '28px' }}
          >
            PLAN
          </Button>
          <Button 
            size="small" 
            type={mode === "MEASURE" ? "primary" : "text"}
            style={{ fontSize: '12px', minWidth: '70px', height: '28px' }}
            disabled
          >
            MEASURE
          </Button>
        </div>
        
        <Button icon={<SaveOutlined />} type="primary" style={{ height: '36px' }}>SAVE</Button>
        <Button icon={<ExportOutlined />} style={{ height: '36px' }}>EXPORT</Button>
        <Button icon={<SettingOutlined />} type="text" />
      </Space>
    </div>
  );
};

export default InspectorHeader;
