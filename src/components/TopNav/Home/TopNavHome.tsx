import * as React from 'react';

import { TopNavBase, ITopNavItem } from 'components/TopNav/Base';

const menuItems: ITopNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
];

export const TopNavHome: React.FunctionComponent = () => {
  return <TopNavBase items={menuItems} />;
};

export default TopNavHome;
