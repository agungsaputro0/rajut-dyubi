import React from 'react';
import { Card } from 'antd';

// Menentukan tipe untuk props
interface FeatureCardProps {
  icon: React.ReactNode; 
  title: string;        
  description: string;  
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card
      style={{ width: 300, margin: '16px', paddingLeft:'2px', paddingRight:'2px' }}
      cover={<div style={{ textAlign: 'center', padding: '8px' }}><center>{icon}</center></div>}
    >
       <Card.Meta
        className="text-slate-800"
        title={
          <div style={{ textAlign: 'center', fontSize: '14pt' }}>
            {title}
          </div>
        }
        description={
          <div className="text-slate-700">
            {description}
          </div>
        }
      />
    </Card>
  );
};

export default FeatureCard;
