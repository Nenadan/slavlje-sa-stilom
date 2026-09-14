import './CategoryFilter.css';

function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-filter" role="group" aria-label="Kategorije">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="chip"
          aria-pressed={category === activeCategory}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
