// components/atoms/SocialIcon.tsx
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';

const SocialIcon: React.FC = () => {
  return (
    <div className="social-icons whitespace-nowrap">
      <FacebookOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-rajutBoldPeach" />
      <InstagramOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-rajutBoldPeach" />
      <TwitterOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-rajutBoldPeach" />
      <YoutubeOutlined className="cursor-pointer text-2xl mx-2 text-rajutGray hover:text-rajutBoldPeach" />
    </div>
  );
};

export default SocialIcon;
