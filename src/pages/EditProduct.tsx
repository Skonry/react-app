import { useState } from 'react';
import { useParams } from 'react-router-dom'

import ProductForm from '../components/ProductForm';
import useApiCommand from '../hooks/useApiCommand';
import useApiQuery from '../hooks/useApiQuery';
import getValidationFeedbackMessages from '../helpers/getValidationFeedbackMessages';

function EditProduct() {
  const [productValidationErrors, setProductValidationErrors] = useState({});

  const { id } = useParams();

  const { data = {} } = useApiQuery(`products/${id}`);

  const { callApi } = useApiCommand(`products/${id}`, 'PUT');

  const onProductFormSubmit = (productName: string, categoryId: number | undefined): void => {
    callApi({
      name: productName,
      category_id: categoryId
    })
    .then(response => {
      setProductValidationErrors(getValidationFeedbackMessages(response.errors));
    });
  }

  return (
    <div>
      <h1 className="text-center my-5">Edit product</h1>
      <ProductForm 
        onProductFormSubmit={onProductFormSubmit} 
        buttonLabel="Edit" 
        validationErrors={productValidationErrors}
        oldProductName={data.name}
        oldCategoryId={data.category_id}
      />
    </div>
  );
}

export default EditProduct;