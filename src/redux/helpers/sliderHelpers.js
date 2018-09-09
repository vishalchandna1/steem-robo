import * as constants from '../constants/slideVariables'

export const getSliderData = (spDelegatedToUpvotes) => {
  let min_threshold_power = 25;
  let min_threshold_frequency = 24;
  let dataToBeReturned = {
    min: 50,
    frequency: 24,
    multiplier: constants.STEEM_EQUAL_50,
  };

  if (spDelegatedToUpvotes <= 50) {
    // Default will be returned.
  } else if (spDelegatedToUpvotes > 50 && spDelegatedToUpvotes <= 100) {
    min_threshold_power = 50;
    min_threshold_frequency = 24;
    dataToBeReturned.min = 35;
    dataToBeReturned.multiplier = constants.STEEM_50_100;
  } else if (spDelegatedToUpvotes > 100 && spDelegatedToUpvotes <= 500) {
    min_threshold_power = 100;
    min_threshold_frequency = 20;
    dataToBeReturned.min = 25;
    dataToBeReturned.multiplier = constants.STEEM_100_500;
  } else if (spDelegatedToUpvotes > 500 && spDelegatedToUpvotes < 3000) {
    min_threshold_power = 500;
    min_threshold_frequency = 16;
    dataToBeReturned.min = 25;
    dataToBeReturned.multiplier = constants.STEEM_500_3000;
  } else if (spDelegatedToUpvotes > 3000) {
    min_threshold_power = 3000;
    min_threshold_frequency = 12;
    dataToBeReturned.min = 20;
    dataToBeReturned.multiplier = constants.STEEM_GREATER_3000;
  }
  dataToBeReturned.frequency = min_threshold_frequency - (spDelegatedToUpvotes - min_threshold_power) * dataToBeReturned.multiplier;

  if (dataToBeReturned.frequency < 6) {
    dataToBeReturned.frequency = 6;
  }
  dataToBeReturned.frequency = dataToBeReturned.frequency.toPrecision(4);
  return dataToBeReturned;
}

export const getSliderDataWithUpvotes = (sp, upvotes) => {
  let min_threshold_power = 25;
  let min_threshold_frequency = 24;
  let dataToBeReturned = {
    min: 2,
    frequency: 24,
    multiplier: constants.STEEM_EQUAL_100,
  };

  const totalDelicatedSteem = upvotes * sp

  // if (totalDelicatedSteem <= 100) {
  //   // Default will be returned.
  // } else if (totalDelicatedSteem > 100 && totalDelicatedSteem <= 1000) {
  //   min_threshold_power = 100;
  //   min_threshold_frequency = 24;
  //   dataToBeReturned.min = 35;
  //   dataToBeReturned.multiplier = constants.STEEM_100_1000;
  // } else if (totalDelicatedSteem > 1000 && totalDelicatedSteem <= 10000) {
  //   min_threshold_power = 1000;
  //   min_threshold_frequency = 20;
  //   dataToBeReturned.min = 25;
  //   dataToBeReturned.multiplier = constants.STEEM_1000_10000;
  // } else if (totalDelicatedSteem > 10000 && totalDelicatedSteem < 100000) {
  //   min_threshold_power = 10000;
  //   min_threshold_frequency = 16;
  //   dataToBeReturned.min = 25;
  //   dataToBeReturned.multiplier = constants.STEEM_10000_100000;
  // } else if (totalDelicatedSteem > 100000) {
  //   min_threshold_power = 100000;
  //   min_threshold_frequency = 12;
  //   dataToBeReturned.min = 20;
  //   dataToBeReturned.multiplier = constants.STEEM_GREATER_100000;
  // }

  // dataToBeReturned.frequency = min_threshold_frequency - (totalDelicatedSteem - min_threshold_power) * dataToBeReturned.multiplier;
  const numberOfDigits = parseInt(totalDelicatedSteem).toString().length;
  dataToBeReturned.frequency = (7 - (numberOfDigits-1)) * 4 - (totalDelicatedSteem - Math.pow(10, numberOfDigits-1)) * 44 / Math.pow(10, (numberOfDigits + 1))

  if (dataToBeReturned.frequency < 6) {
    dataToBeReturned.frequency = 6;
  }
  dataToBeReturned.frequency = dataToBeReturned.frequency.toPrecision(4);
  return dataToBeReturned;
}

export const getSliderStepAndMin = (sp) => {
  let step, min;
  if (sp <= 50) {
    min = 2;
    step = 1;
  } else if (sp > 50 && sp <= 100) {
    step = 1;
    min = 2;
  } else if (sp > 100 && sp <= 500) {
    step = 1;
    min = 1;
  } else if (sp > 500 && sp < 3000) {
    step = 1;
    min = 1;
  } else if (sp > 3000) {
    step = 0.5;
    min = 1;
  } else if (sp > 20000) {
    step = 0.5;
    min = 0.5;
  }

  if (sp > 50000) {
    step = 0.5;
    min = 0.5;
  }

  return {step, min};
}
