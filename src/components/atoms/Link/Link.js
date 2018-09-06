import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '../../../redux/helpers/withStyles';

const styles = theme => {
  const { unit } = theme.theme.spacing;
  const { palette } = theme.theme;
  console.log(theme)
  return {
    link: {
      background: theme.backgroundColor ? theme.backgroundColor : palette.primary.main,
      padding:'6px 20px',
      borderRadius: unit/2,
      color: theme.color ? theme.color : palette.common.white,
      boxShadow: theme.theme.shadows[2],
      marginTop: theme.marginTop || unit,
      marginLeft: theme.marginLeft || unit,
      width: theme.width ? theme.width : 'inherit',
      border: theme.border || 'none',
      boxShadow: theme.boxShadow || theme.theme.shadows[3],
      textDecoration: 'none !important',
      '&:hover': {
        color: theme.color || palette.common.white,
      }
    }
  }
}

const CustomLink = (props) => {
  if (props.external)
    return <a href={props.to} target="_blank" className={props.classes.link}>{props.children}</a>
  return <Link to={props.to} className={props.classes.link}>{props.children}</Link>
}

export default withStyles(styles)(CustomLink);
