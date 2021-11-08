import { useState } from 'react';

import useApiCommand from '../hooks/useApiCommand';

function CategoryForm({ oldCategoryName = ''}) {
  const [name, setName] = useState(oldCategoryName);

  const { callApi } = useApiCommand('product_categories', 'POST');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    callApi({
      name
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="category_name">Category name</label>
        <input 
          type="text"
          className="form-control"
          id="category_name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CategoryForm;