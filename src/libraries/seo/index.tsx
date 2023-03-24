import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export type SEOData = {
  siteName?: string;
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  viewport?: string;
  canonicalUrl?: string;
};

export function SEO({
  siteName,
  title,
  description,
  keywords,
  robots,
  viewport,
  canonicalUrl
}: SEOData) {
  const { t } = useTranslation();
  const titlePrefix = process.env.REACT_APP_NAME || t('app_name');

  return (
    <Helmet>
      <title>{title ? `${title}-${titlePrefix}` : titlePrefix}</title>
      {viewport && <meta name="viewport" content={viewport} />}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {robots && <meta name="robots" content={robots} />}

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {keywords && <meta property="og:keywords" content={keywords} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={siteName} />
    </Helmet>
  );
}
