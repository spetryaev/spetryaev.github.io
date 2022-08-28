import * as React from 'react';

import cs from 'clsx';
import { useTranslation } from 'react-i18next';

import HtmlHead from 'components/HtmlHead';
import TargetBlankLink from 'components/Link/TargetBlank';

import { updateAssetsPrefix } from 'utils/path';

const styles = {
  header: 'flex items-center border border-gray-200 min-h-[60px] w-full px-4',
  container: 'p-0 flex flex-col min-h-screen',
  main: 'px-0 md:px-4 flex flex-col flex-1',
  footer:
    'mt-6 w-full h-16 border-t border-gray-200 flex justify-center items-center space-x-2',
  footerLink: 'flex justify-center items-center',
  footerLogo: 'ml-2 h-4',
};

export interface ILayoutBaseProps {
  htmlHead?: JSX.Element;
  header?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  children?: React.ReactNode;
}

export const LayoutBase: React.FunctionComponent<ILayoutBaseProps> = ({
  htmlHead = <HtmlHead />,
  header,
  children,
  className,
  containerClassName,
  headerClassName,
}) => {
  return (
    <>
      {htmlHead}

      <div className={cs(styles.container, containerClassName)}>
        {header && (
          <header className={cs(styles.header, headerClassName)}>
            {header}
          </header>
        )}

        <main className={cs(styles.main, className)}>{children}</main>
      </div>
    </>
  );
};

export default LayoutBase;
