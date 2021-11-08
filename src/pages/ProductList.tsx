import useApiQuery from '../hooks/useApiQuery';
import { ProductAjaxDto } from '../api-types';

function ProductList() {
  const { data: products = [] }: { data: ProductAjaxDto[]} = useApiQuery('products');

  return (
    <div>
      <h1 className="text-center my-5">List of products</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;