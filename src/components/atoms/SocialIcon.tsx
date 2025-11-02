// components/atoms/SocialIcon.tsx
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';

const SocialIcon: React.FC = () => {
  return (
    <div className="social-icons whitespace-nowrap">
      <FacebookOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-secondColor" />
      <InstagramOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-secondColor" />
      <TwitterOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-secondColor" />
      <YoutubeOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-secondColor" />
    </div>
  );
};

export default SocialIcon;
