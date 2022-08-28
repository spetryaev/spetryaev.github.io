import * as React from 'react';

import HtmlHead from 'components/HtmlHead';
import { TopNavHome } from 'components/TopNav/Home';

import LayoutBase from 'components/Layout/Base';

export interface ILayoutProjectProps {
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  children?: React.ReactNode;
}

export const LayoutProject: React.FunctionComponent<ILayoutProjectProps> = ({
  children,
  className,
  containerClassName,
}) => (
  <LayoutBase
    {...{
      children,
      className,
      containerClassName,
      header: <TopNavHome />,
      htmlHead: <HtmlHead title="Projects" />,
    }}
  />
);

export default LayoutProject;
