import { useState } from 'react';
import { useParams } from 'react-router-dom'

import CategoryForm from '../components/CategoryForm';
import useApiCommand from '../hooks/useApiCommand';
import useApiQuery from '../hooks/useApiQuery';
import getValidationFeedbackMessages from '../helpers/getValidationFeedbackMessages';

function EditCategory() {
  const [categoryValidationErrors, setCategoryValidationErrors] = useState({});

  const { id } = useParams();

  const { callApi } = useApiCommand(`product_categories/${id}`, 'PUT');

  const { data = {} } = useApiQuery(`product_categories/${id}`);

  const onCategoryFormSubmit = (categoryName: string): void => {
    callApi({
      name: categoryName
    })
    .then(response => {
      setCategoryValidationErrors(getValidationFeedbackMessages(response.errors));
    });
  }
  return (
    <div>
      <h1 className="text-center my-5">Edit category</h1>
      <CategoryForm 
        onCategoryFormSubmit={onCategoryFormSubmit} 
        buttonLabel="Edit" 
        oldCategoryName={data.name}
        validationErrors={categoryValidationErrors}
      />
    </div>
  );
}

export default EditCategory;