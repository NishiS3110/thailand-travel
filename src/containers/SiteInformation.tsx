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
    <SiteInformationComp />
  </>
);

export default withRouter(SiteInformationContainer);
