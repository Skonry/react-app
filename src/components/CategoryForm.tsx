import { useState } from 'react';

type CategoryFormProps = {
  onCategoryFormSubmit: ((categoryName: string) => void);
  buttonLabel: string;
  oldCategoryName?: string;
};

function CategoryForm({ onCategoryFormSubmit, buttonLabel, oldCategoryName = ''}: CategoryFormProps) {
  const [name, setName] = useState(oldCategoryName);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onCategoryFormSubmit(name);
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