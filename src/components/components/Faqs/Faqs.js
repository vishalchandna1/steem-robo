import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from '../../../redux/helpers/withStyles';


const styles = props => {
  const { theme } = props;
  return {
    faqsContainer: {
      width: '80%',
      marginTop: 3 * theme.spacing.unit,
      marginLeft: '10%',
      paddingBottom: 5 * theme.spacing.unit,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    answerContent: {
      textAlign: 'left',
      color: theme.palette.grey[700],
    },
    faqHeadingText: {
      paddingTop: 5 * theme.spacing.unit,
      paddingBottom: 6 * theme.spacing.unit,
    }
  }
}

const renderPanels = (props) => {
  const { data, classes } = props;
  return <React.Fragment>{data.map(faq => {
    return <ExpansionPanel key={Math.random()}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{faq.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.answerContent}>
          {faq.ans}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  })}
  </React.Fragment>
}

class Faqs extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.faqsContainer}>
        <Typography className={classes.faqHeadingText} variant="display2">
          FAQs
        </Typography>
        {data.length > 0 && renderPanels(this.props)}
      </div>
    )
  }
}

export default withStyles(styles)(Faqs);

