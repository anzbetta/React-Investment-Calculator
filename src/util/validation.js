export function validateInvestmentInputs(inputs) {

  const errors = [];

  if (inputs.initialInvestment === '') {
    errors.push('Initial investment is required.');
  } else if (inputs.initialInvestment < 0) {
    errors.push('Initial investment must be positive.');
  }

  if (inputs.annualInvestment === '') {
    errors.push('Annual investment is required.');
  } else if (inputs.annualInvestment < 0) {
    errors.push('Annual investment must be positive.');
  }

  if (inputs.expectedReturn === '') {
    errors.push('Expected return is required.');
  } else if (inputs.expectedReturn < 0) {
    errors.push('Expected return must be positive.');
  }

  if (inputs.duration === '') {
    errors.push('Duration is required.');
  } else if (inputs.duration < 1) {
    errors.push('Duration must be greater than 0.');
  }

  return {
    errors
  };
}