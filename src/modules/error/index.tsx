import { SEO } from 'libraries/seo';
import { Fragment } from 'react';

export default function ErrorPage() {
  return (
    <Fragment>
      <SEO title="Error Page" />
      <div className="hight-screen">
        <h1 className="text-center">PAGE ERROR</h1>
      </div>
    </Fragment>
  );
}
