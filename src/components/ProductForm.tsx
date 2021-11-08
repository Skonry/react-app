import { useState } from 'react';

import useApiQuery from '../hooks/useApiQuery';
import useApiCommand from '../hooks/useApiCommand';

import { ProductCategoryAjaxDto } from '../api-types';

function ProductForm({ oldProductName = '', oldCategoryId = '-1'}) {
  const [name, setName] = useState(oldProductName);
  const [categoryId, setCategoryId] = useState(oldCategoryId);

  const { data: categories = [] }: { data: ProductCategoryAjaxDto[]} = useApiQuery('product_categories');

  const { callApi } = useApiCommand('products', 'POST');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    callApi({
      name,
      category_id: categoryId,
      //measure_type: 'sztuka',
      //type: 'BASIC'
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="product_name">Product name</label>
        <input 
          type="text"
          className="form-control"
          id="product_name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="category">Select category</label>
        <select className="form-select" value={categoryId} onChange={e => setCategoryId(e.target.value)}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ProductForm;