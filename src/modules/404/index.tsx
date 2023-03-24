import { SEO } from 'libraries/seo';
import { Fragment } from 'react';

export default function NotFoundPage() {
  return (
    <Fragment>
      <SEO title="Not Found" />
      <div className="hight-screen">
        <h1 className="text-center">PAGE NOT FOUND</h1>
      </div>
    </Fragment>
  );
}
