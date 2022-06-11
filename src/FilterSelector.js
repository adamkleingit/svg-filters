import { filters } from "./constants";

export function FilterSelector({ filter, setFilter }) {
  const filterIndex = Object.keys(filters).findIndex(
    (key) => filters[key] === filter
  );
  return (
    <div className={`filter-strip filter-strip-${filterIndex}`}>
      {Object.keys(filters).map((filterKey, index) => {
        const filter = filters[filterKey];

        return (
          <div
            className={`filter-item ${
              index === filterIndex && "filter-item-active"
            }`}
            onClick={() => setFilter(filter)}
            key={filterKey}
          >
            <div
              className="filter-image"
              style={{ backgroundImage: `url(${filter.imageUrl})` }}
            ></div>
            {index === filterIndex && (
              <div className="filter-name">{filterKey}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
