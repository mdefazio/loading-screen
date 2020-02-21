import React from 'react';
import LogoAnimationA from '../components/logo';
import LoadingElastic from '../components/loading-elastic';
import { EuiPage, EuiPageBody } from '@elastic/eui';

export default () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <div style={{ width: 150, margin: '100px auto' }}>
        <LoadingElastic />
      </div>
    </EuiPageBody>
  </EuiPage>
);
