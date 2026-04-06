import React, { useState } from 'react';
import { Layout, Space, Spin, Typography } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import InspectorHeader from './InspectorComponents/InspectorHeader';
import InspectorSidebar from './InspectorComponents/InspectorSidebar';
import InspectorDrawingPane from './InspectorComponents/InspectorDrawingPane';
import InspectorBOCTable from './InspectorComponents/InspectorBOCTable';
// import InspectorPropertiesPane from './InspectorComponents/InspectorPropertiesPane';

const { Content, Sider } = Layout;
const { Text } = Typography;

const QMSInspector = () => {
  const [searchParams] = useSearchParams();
  const drawingUrl = searchParams.get('drawingUrl');
  const isPdf = searchParams.get('isPdf') === 'true';
  const fileName = searchParams.get('fileName') || "Drawing.pdf";
  
  const [selectedCharacteristic, setSelectedCharacteristic] = useState({
    key: 11,
    id: 11,
    zone: 'E2',
    nominal: '4.50',
    tolPlus: '+0.10',
    tolMinus: '-0.00',
    dimType: 'DIM',
    instrument: 'Depth Micrometer'
  });

  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f8fafc' }}>
      {/* Top Header */}
      <InspectorHeader fileName={fileName} />

      <Layout style={{ flex: 1, overflow: 'hidden', background: 'transparent' }}>
        {/* Left Side: Annotation Toolbar Sidebar */}
        <InspectorSidebar />

        {/* Center: Drawing Area */}
        <Content style={{ position: 'relative', height: '100%', borderRight: '1px solid #f0f0f0' }}>
            <InspectorDrawingPane drawingUrl={drawingUrl} isPdf={isPdf} />
        </Content>

        {/* Right Side: Properties & BOC table */}
        <Sider 
          width="40%" 
          theme="light" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            background: '#fff',
            borderLeft: '1px solid #f0f0f0',
            height: '100%' 
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* BOC Table section - Now taking full height */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <InspectorBOCTable 
                 selectedId={selectedCharacteristic?.id} 
                 onRowSelect={setSelectedCharacteristic}
                 fullHeight={true} 
              />
            </div>
          </div>
        </Sider>
      </Layout>
    </div>
  );
};

export default QMSInspector;
