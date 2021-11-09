import ProductForm from '../components/ProductForm';
import CategoryForm from '../components/CategoryForm';
import useApiCommand from '../hooks/useApiCommand';

function CreateContent() {
  const { callApi: callApiProducts } = useApiCommand('products', 'POST');
  const { callApi: callApiCategories } = useApiCommand('product_categories', 'POST');

  const onProductFormSubmit = (productName: string, categoryId: number | undefined): void => {
    callApiProducts({
      name: productName,
      category_id: categoryId
    });
  }

  const onCategoryFormSubmit = (categoryName: string): void => {
    callApiCategories({
      name: categoryName
    });
  }

  return (
    <div>
      <h1 className="text-center my-5">CreateContent</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h2>Create Product</h2>
              </div>
              <div className="card-body">
                <ProductForm onProductFormSubmit={onProductFormSubmit} buttonLabel="Create" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h2>Create Product</h2>
              </div>
              <div className="card-body">
                <CategoryForm onCategoryFormSubmit={onCategoryFormSubmit} buttonLabel="Create" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;