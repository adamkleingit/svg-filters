export function ElementTypeSelector({ elementType, setElementType }) {
  return (
    <div className="element-type-strip">
      {["text", "image", "video", "webcam"].map((curElementType) => (
        <button
          className={
            elementType === curElementType ? "element-type-active" : undefined
          }
          onClick={() => setElementType(curElementType)}
          key={curElementType}
        >
          {curElementType}
        </button>
      ))}
    </div>
  );
}
