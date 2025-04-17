import React from 'react';
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  bgImage = 'bg-bathroom-hero'
}) => {
  return;
};
export default PageHeader;