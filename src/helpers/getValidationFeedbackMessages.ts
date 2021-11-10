import { ApiError } from '../api-types';

type ValidationFeedbackMessages = {
  [field: string]: string[]
}

const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1); 

function getMessage(error: ApiError): string {
  if (error.code == 'category_id_must_not_be_null') {
    return 'Category must be selected.';
  }
  else if (error.code == 'name_constraints.nameisunique') {
    return 'Category name must be unique';
  }
  else {
    return `${capitalizeFirstLetter(error.field)} ${error.message}.`;
  } 
}

function getValidationFeedbackMessages(errors: ApiError[]): ValidationFeedbackMessages {
  const validationFeedbackMessages = errors.reduce((acc: any, value: any) => {
    const message = getMessage(value);

    if (acc[value.field]) {
      acc[value.field].push(message);
    }
    else {
      acc[value.field] = [message];
    }
    
    return acc;
  }, {});

  return validationFeedbackMessages;
}

export default getValidationFeedbackMessages;