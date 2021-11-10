import { useState } from 'react';

import ProductForm from '../components/ProductForm';
import CategoryForm from '../components/CategoryForm';
import useApiCommand from '../hooks/useApiCommand';
import getValidationFeedbackMessages from '../helpers/getValidationFeedbackMessages';

function CreateContent() {
  const [productValidationErrors, setProductValidationErrors] = useState({});
  const [categoryValidationErrors, setCategoryValidationErrors] = useState({});

  const { callApi: callApiProducts } = useApiCommand('products', 'POST');
  const { callApi: callApiCategories } = useApiCommand('product_categories', 'POST');

  const onProductFormSubmit = (productName: string, categoryId: number | undefined): void => {
    callApiProducts({
      name: productName,
      category_id: categoryId
    })
    .then(response => {
      setProductValidationErrors(getValidationFeedbackMessages(response.errors));
    });
  }

  const onCategoryFormSubmit = (categoryName: string): void => {
    callApiCategories({
      name: categoryName
    })
    .then(response => {
      setCategoryValidationErrors(getValidationFeedbackMessages(response.errors));
    });
  }

  return (
    <div>
      <h1 className="text-center my-5">Create Content</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h2>Create Product</h2>
              </div>
              <div className="card-body">
                <ProductForm 
                  onProductFormSubmit={onProductFormSubmit} 
                  buttonLabel="Create" 
                  validationErrors={productValidationErrors}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h2>Create Product</h2>
              </div>
              <div className="card-body">
                <CategoryForm 
                  onCategoryFormSubmit={onCategoryFormSubmit} 
                  buttonLabel="Create" 
                  validationErrors={categoryValidationErrors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;