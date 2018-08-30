import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const withStylesProps = styles =>
  Component =>
    props => {
      const PropsAttachedComp = withStyles(theme => styles({...props, theme}))(Component);
      return <PropsAttachedComp/>;
    };

export default withStylesProps;
