import * as React from 'react';

import Head from 'next/head';

export interface IHtmlHeadProps {
  title?: string;
  children?: React.ReactNode;
}

export const HtmlHead: React.FunctionComponent<IHtmlHeadProps> = ({
  title,
  children,
}) => (
  <Head>
    <title>{title && `${title} | `}Sergey Petryaev</title>
    {children}
  </Head>
);

export default HtmlHead;
