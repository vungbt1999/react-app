import React from 'react';
import { useTranslation } from 'react-i18next';
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('home')}</h1>
      <p className="text-primary">Hello Page</p>
    </div>
  );
}
