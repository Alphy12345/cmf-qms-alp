import React from 'react';
import { Button, Tooltip, Typography } from 'antd';
import { 
  PlusCircleOutlined,
  ZoomInOutlined, 
  ZoomOutOutlined, 
  RotateRightOutlined, 
  FullscreenOutlined,
  FileTextOutlined,
  DragOutlined,
  AimOutlined,
  VerifiedOutlined,
  InteractionOutlined,
  DeleteOutlined,
  SelectOutlined
} from '@ant-design/icons';

const { Text } = Typography;

const SidebarDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '10px 12px' }}>
    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
    <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1px solid #cbd5e1', margin: '0 8px', background: '#fff' }}></div>
    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
  </div>
);

const SidebarItem = ({ icon, label, active = false, danger = false }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '2px',
    cursor: 'pointer',
    width: '100%',
    padding: '8px 0'
  }}>
    <Button 
      type="text" 
      icon={icon} 
      style={{ 
        fontSize: '20px', 
        height: '42px', 
        width: '42px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: active ? '#eff6ff' : 'transparent',
        color: danger ? '#ef4444' : (active ? '#1890ff' : '#475569'),
        border: active ? '1px solid #bfdbfe' : '1px solid transparent',
        borderRadius: '10px'
      }} 
    />
    <Text style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{label}</Text>
  </div>
);

const SectionHeader = ({ title }) => (
  <div style={{ padding: '12px 0 4px 0', width: '100%', textAlign: 'center' }}>
    <Text strong style={{ fontSize: '10px', color: '#94a3b8', letterSpacing: '1px' }}>{title}</Text>
  </div>
);

const InspectorSidebar = () => {
  return (
    <div style={{ 
      width: '85px', 
      background: '#f8fafc', 
      borderRight: '1px solid #e2e8f0', 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%', 
      alignItems: 'center',
      overflowY: 'auto',
      boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.02)'
    }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <SectionHeader title="TOOLS" />
        <SidebarItem icon={<SelectOutlined />} label="Select" active={true} />
        <SidebarItem icon={<DragOutlined />} label="Pan" />
        <SidebarItem icon={<VerifiedOutlined />} label="Stamp" />
        <SidebarItem icon={<FileTextOutlined />} label="Notes" />

        <SidebarDivider />

        <SectionHeader title="VIEW" />
        <SidebarItem icon={<ZoomInOutlined />} label="Zoom In" />
        <SidebarItem icon={<ZoomOutOutlined />} label="Zoom Out" />
        <SidebarItem icon={<RotateRightOutlined />} label="Rotate" />
        <SidebarItem icon={<FullscreenOutlined />} label="Reset" />

        <SidebarDivider />

        <SectionHeader title="ACTIONS" />
        <SidebarItem icon={<InteractionOutlined />} label="Auto Balloon" />
        <SidebarItem icon={<DeleteOutlined />} label="Clear All" danger={true} />

      </div>
    </div>
  );
};

export default InspectorSidebar;
