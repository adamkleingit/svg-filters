import "./styles.css";
import { useState } from "react";
import { filters } from "./constants";
import { FilterSelector } from "./FilterSelector";
import { ElementTypeSelector } from "./ElementTypeSelector";
import { ElementWithFilter } from "./ElementWithFilter";

export default function App() {
  const [filter, setFilter] = useState(filters.none);
  const [elementType, setElementType] = useState("webcam");
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className="app">
        <div className="container">
          <button
            className="preview"
            checked={isActive}
            onMouseDown={() => setIsActive(false)}
            onMouseUp={() => setIsActive(true)}
            onMouseOut={() => setIsActive(true)}
          >
            <span role="img" aria-label="Hide">
              👁️
            </span>
          </button>

          <ElementTypeSelector
            elementType={elementType}
            setElementType={setElementType}
          />
          <ElementWithFilter filter={filter} elementType={elementType} />

          <FilterSelector filter={filter} setFilter={setFilter} />
        </div>
      </div>
      {isActive && (
        <svg width="0" height="0">
          {filter.component && <filter.component />}
        </svg>
      )}
    </>
  );
}
