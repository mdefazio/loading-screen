import React from 'react';
import LogoAnimationA from '../components/logo';
import { EuiPage, EuiPageBody } from '@elastic/eui';

export default () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <LogoAnimationA />
    </EuiPageBody>
  </EuiPage>
);
