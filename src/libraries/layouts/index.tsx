import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import FooterLayout, { FooterLayoutProps } from './footer';
import HeaderLayout, { HeaderLayoutProps } from './header';

export default function MainLayout() {
  const { t } = useTranslation();
  const header: HeaderLayoutProps = {
    navigates: [
      { icon: 'memo', title: t('my_memo'), url: '/#' },
      { icon: 'challenge', title: t('challenge'), url: '/#' },
      { icon: 'info', title: t('info'), url: '/#' }
    ],
    menuBars: [
      { title: t('my_memo'), url: '/#' },
      { title: t('weight_graph'), url: '/#' },
      { title: t('the_goal'), url: '/#' },
      { title: t('selected_course'), url: '/#' },
      { title: t('column_list'), url: '/#' },
      { title: t('setting'), url: '/#' }
    ]
  };
  const footer: FooterLayoutProps = {
    navigates: [
      { title: t('member_registration'), url: '/#' },
      { title: t('operating_company'), url: '/#' },
      { title: t('term_of_service'), url: '/#' },
      { title: t('personal_info'), url: '/#' },
      { title: t('commercial_transaction'), url: '/#' },
      { title: t('inquiry'), url: '/#' }
    ]
  };

  return (
    <Fragment>
      <HeaderLayout {...header} />
      <div className="pt-16">
        <Outlet />
      </div>
      <FooterLayout {...footer} />
    </Fragment>
  );
}
