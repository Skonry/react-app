import { Link } from 'react-router-dom';

import useApiQuery from '../hooks/useApiQuery';
import { ProductCategoryAjaxDto } from '../api-types';

function CategoryList() {
  const { data: categories = [] }: { data: ProductCategoryAjaxDto[]} = useApiQuery('product_categories');

  return (
    <div>
      <h1 className="text-center my-5">List of categories</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <Link className="nav-link" to={`${category.id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;