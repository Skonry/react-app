import ProductForm from '../components/ProductForm';
import CategoryForm from '../components/CategoryForm';

function CreateContent() {
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
                <ProductForm />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h2>Create Product</h2>
              </div>
              <div className="card-body">
                <CategoryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;