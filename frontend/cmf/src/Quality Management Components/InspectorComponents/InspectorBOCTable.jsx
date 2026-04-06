import React from 'react';
import { Table, Tag, Typography, Space, Button } from 'antd';
import { PlusOutlined, FilterOutlined, SettingOutlined } from '@ant-design/icons';

const { Text } = Typography;

const InspectorBOCTable = ({ selectedId, onRowSelect, fullHeight }) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 50,
      render: (id) => <Text style={{ color: '#8c8c8c' }}>{id}</Text>,
    },
    {
      title: 'ZONE',
      dataIndex: 'zone',
      key: 'zone',
      width: 80,
      render: (zone) => <Text strong style={{ fontSize: '12px' }}>{zone}</Text>,
    },
    {
      title: 'NOMINAL',
      dataIndex: 'nominal',
      key: 'nominal',
      width: 100,
      render: (nominal) => <Text strong style={{ fontSize: '13px' }}>{nominal}</Text>,
    },
    {
      title: 'TOL +',
      dataIndex: 'tolPlus',
      key: 'tolPlus',
      width: 80,
      render: (val) => <Text style={{ color: val !== '-' ? '#52c41a' : '#bfbfbf' }}>{val}</Text>,
    },
    {
      title: 'TOL -',
      dataIndex: 'tolMinus',
      key: 'tolMinus',
      width: 80,
      render: (val) => <Text style={{ color: val !== '-' ? '#ff4d4f' : '#bfbfbf' }}>{val}</Text>,
    },
    {
      title: 'DIM TYPE',
      dataIndex: 'dimType',
      key: 'dimType',
      width: 120,
      render: (type) => (
        <Text style={{ 
          fontSize: '11px', 
          fontWeight: 700, 
          color: type === 'DIM' ? '#1890ff' : 
                 type === 'GD&T' ? '#722ed1' : 
                 type === 'SURFACE' ? '#faad14' : '#8c8c8c' 
        }}>
          {type}
        </Text>
      ),
    },
    {
      title: 'INSTRUMENT',
      dataIndex: 'instrument',
      key: 'instrument',
      render: (instr) => <Text style={{ fontSize: '12px' }}>{instr}</Text>,
    },
  ];

  const data = [
    { key: 1, id: 1, zone: 'A1', nominal: '125.00', tolPlus: '+0.05', tolMinus: '-0.05', dimType: 'DIM', instrument: 'Caliper' },
    { key: 2, id: 2, zone: 'B2', nominal: '42.000', tolPlus: '+0.025', tolMinus: '-0.000', dimType: 'DIM', instrument: 'Bore Gauge' },
    { key: 3, id: 3, zone: 'B3', nominal: '-', tolPlus: '0.015', tolMinus: '-', dimType: 'GD&T', instrument: 'CMM' },
    { key: 4, id: 4, zone: 'C1', nominal: '-', tolPlus: '0.010', tolMinus: '-', dimType: 'GD&T', instrument: 'CMM' },
    { key: 5, id: 5, zone: 'D4', nominal: '0.8', tolPlus: '-', tolMinus: '-', dimType: 'SURFACE', instrument: 'Profilometer' },
    { key: 6, id: 6, zone: 'A2', nominal: '8.00', tolPlus: '+0.02', tolMinus: '-0.02', dimType: 'DIM', instrument: 'Caliper' },
    { key: 7, id: 7, zone: 'C3', nominal: '-', tolPlus: '0.10', tolMinus: '-', dimType: 'GD&T', instrument: 'CMM' },
    { key: 8, id: 8, zone: 'B4', nominal: 'M8', tolPlus: '6H', tolMinus: '-', dimType: 'NOTE', instrument: 'Thread Gauge' },
    { key: 11, id: 11, zone: 'E2', nominal: '4.50', tolPlus: '+0.10', tolMinus: '-0.00', dimType: 'DIM', instrument: 'Depth Micrometer' },
    { key: 12, id: 12, zone: 'F1', nominal: '12.00', tolPlus: '+0.05', tolMinus: '-0.05', dimType: 'DIM', instrument: 'Micrometer' },
    { key: 13, id: 13, zone: 'G3', nominal: '-', tolPlus: '0.02', tolMinus: '-', dimType: 'GD&T', instrument: 'Dial Indicator' },
    { key: 14, id: 14, zone: 'H2', nominal: '6.000', tolPlus: '+0.012', tolMinus: '-0.00', dimType: 'DIM', instrument: 'Pin Gauge' },
    { key: 15, id: 15, zone: 'J4', nominal: '3.2', tolPlus: '-', tolMinus: '-', dimType: 'SURFACE', instrument: 'Profilometer' },
    { key: 18, id: 18, zone: 'M3', nominal: '55', tolPlus: '+2', tolMinus: '-2', dimType: 'NOTE', instrument: 'Hardness Tester' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space>
          <DeploymentUnitOutlined style={{ color: '#1890ff' }} />
          <Text strong style={{ fontSize: '14px', textTransform: 'uppercase' }}>Characteristics</Text>
          <Tag color="blue" bordered={false} style={{ margin: 0, borderRadius: '4px', fontSize: '10px' }}>{data.length}</Tag>
        </Space>
        <Space>
           <Button icon={<PlusOutlined />} size="small" type="text" style={{ fontSize: '10px' }}>ADD</Button>
           <Button icon={<FilterOutlined />} size="small" type="text" />
           <Button icon={<SettingOutlined />} size="small" type="text" />
        </Space>
      </div>
      
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          pagination={false}
          scroll={{ y: fullHeight ? 'calc(100vh - 120px)' : 'calc(100vh - 400px)' }}
          rowClassName={(record) => record.id === selectedId ? 'bg-blue-50 border-l-4 border-blue-500' : ''}
          onRow={(record) => ({
             onClick: () => onRowSelect && onRowSelect(record),
          })}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

const DeploymentUnitOutlined = ({ style }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}>
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <path d="M7 16l3-3M17 16l-3-3M12 8v5" />
  </svg>
);

export default InspectorBOCTable;
