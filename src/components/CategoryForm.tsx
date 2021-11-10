import { useEffect, useState } from 'react';

type CategoryFormProps = {
  onCategoryFormSubmit: ((categoryName: string) => void);
  buttonLabel: string;
  validationErrors: {
    [field: string]: string[]
  }
  oldCategoryName?: string;
};

function CategoryForm({ onCategoryFormSubmit, buttonLabel, validationErrors, oldCategoryName = ''}: CategoryFormProps) {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(oldCategoryName);
  }, [oldCategoryName]);

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
          className={`form-control ${validationErrors['name']?.length > 0 ? 'is-invalid': ''}`}
          id="category_name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {validationErrors['name']?.map(message => (
          <div key={message} className="invalid-feedback"> 
            {message}
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-primary">{buttonLabel}</button>
    </form>
  );
}

export default CategoryForm;