import BackToTop from 'libraries/components/back-to-top';
import { Fragment, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ApiUtils from 'utils/api/api.utils';
import FooterLayout, { FooterLayoutProps } from './footer';
import HeaderLayout, { HeaderLayoutProps } from './header';

export type MainLayoutProps = { header: HeaderLayoutProps; footer: FooterLayoutProps };
export default function MainLayout() {
  const [loading, setLoading] = useState<boolean>(false);
  const [layoutData, setLayoutData] = useState<MainLayoutProps>();

  useEffect(() => {
    fetchingLayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchingLayout = async () => {
    if (loading) return;
    setLoading(true);
    const res: MainLayoutProps = await ApiUtils.get('/layout');
    setLayoutData(res);
    setLoading(false);
  };

  return (
    <Fragment>
      {layoutData?.header && <HeaderLayout {...layoutData?.header} />}
      <div className="hight-content pt-16">
        <Outlet />
        <BackToTop />
      </div>
      {layoutData?.footer && <FooterLayout {...layoutData.footer} />}
    </Fragment>
  );
}
