import { FooterLayoutProps } from 'libraries/layouts/footer';
import { HeaderLayoutProps } from 'libraries/layouts/header';
import i18n from 'configs/locales';
import { routePath } from 'routers/config';

const t = i18n.t;
const footer: FooterLayoutProps = {
  navigates: [
    { title: t('member_registration'), url: routePath.HashTag },
    { title: t('operating_company'), url: routePath.HashTag },
    { title: t('term_of_service'), url: routePath.HashTag },
    { title: t('personal_info'), url: routePath.HashTag },
    { title: t('commercial_transaction'), url: routePath.HashTag },
    { title: t('inquiry'), url: routePath.HashTag }
  ]
};

const header: HeaderLayoutProps = {
  navigates: [
    { icon: 'memo', title: t('my_memo'), url: routePath.MyRecord },
    { icon: 'challenge', title: t('challenge'), url: routePath.HashTag },
    { icon: 'info', title: t('info'), url: routePath.HashTag }
  ],
  menuBars: [
    { title: t('my_memo'), url: routePath.MyRecord },
    { title: t('weight_graph'), url: routePath.HashTag },
    { title: t('the_goal'), url: routePath.HashTag },
    { title: t('selected_course'), url: routePath.HashTag },
    { title: t('column_list'), url: routePath.Column },
    { title: t('setting'), url: routePath.HashTag }
  ]
};

export const layout = {
  header,
  footer
};
