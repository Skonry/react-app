import { useState, useEffect } from 'react';

import useApiQuery from '../hooks/useApiQuery';
import { ProductCategoryAjaxDto } from '../api-types';

type ProductFormProps = {
  onProductFormSubmit: ((productName: string, categoryId: number | undefined) => void);
  buttonLabel: string;
  oldProductName?: string;
  oldCategoryId?: number ;
};

const getSelectedCategoryIndex = (categories: ProductCategoryAjaxDto[], categoryId: number | undefined): number => {
  if (categoryId) {
    return categories.findIndex(category => category.id = categoryId);
  }

  return 0;
}

function ProductForm({ onProductFormSubmit, buttonLabel, oldCategoryId, oldProductName = ''}: ProductFormProps) {
  const { data: categories = [] }: { data: ProductCategoryAjaxDto[]} = useApiQuery('product_categories');

  const [name, setName] = useState(oldProductName);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(getSelectedCategoryIndex(categories, oldCategoryId));

  useEffect(() => {
    setName(oldProductName);
    setSelectedCategoryIndex(getSelectedCategoryIndex(categories, oldCategoryId));
  }, [oldProductName, oldCategoryId]);

  useEffect(() => {
    setSelectedCategoryIndex(getSelectedCategoryIndex(categories, oldCategoryId))
  }, [categories]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onProductFormSubmit(name, categories[selectedCategoryIndex].id);
  }

  const handleChange = (e: any) => {
    setSelectedCategoryIndex(getSelectedCategoryIndex(categories, Number(e.target.value)));
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
        <select className="form-select" value={categories[selectedCategoryIndex]?.id} onChange={handleChange}>
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