import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps, withRouter } from 'react-router';

import SiteInformationComp from '../components/SiteInformation';

type SiteInformationProps = {} & RouteComponentProps;

const SiteInformationContainer: FC<SiteInformationProps> = () => (
  <>
    <Helmet>
      <title>サイト情報</title>
    </Helmet>
    <div className="contents">
      <div className="container">
        <SiteInformationComp />
      </div>
    </div>
  </>
);

export default withRouter(SiteInformationContainer);
