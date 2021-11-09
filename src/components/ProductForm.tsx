import { useState, useEffect } from 'react';

import useApiQuery from '../hooks/useApiQuery';
import { ProductCategoryAjaxDto } from '../api-types';

type ProductFormProps = {
  onProductFormSubmit: ((productName: string, categoryId: string) => void);
  buttonLabel: string;
  oldProductName?: string;
  oldCategoryId?: string;
};

function ProductForm({ onProductFormSubmit, buttonLabel, oldProductName = '', oldCategoryId = '-1'}: ProductFormProps) {
  const [name, setName] = useState(oldProductName);
  const [categoryId, setCategoryId] = useState(oldCategoryId);

  useEffect(() => {
    setName(oldProductName);
    setCategoryId(oldCategoryId);
  }, [oldProductName, oldCategoryId]);

  const { data: categories = [] }: { data: ProductCategoryAjaxDto[]} = useApiQuery('product_categories');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onProductFormSubmit(name, categoryId);
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
      <button type="submit" className="btn btn-primary">{buttonLabel}</button>
    </form>
  );
}

export default ProductForm;