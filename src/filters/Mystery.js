export function MysteryFilter() {
  return (
    <filter id="filter">
      <feColorMatrix
        values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          5 -10 5 0 1
        "
      />
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 1 1 1" />
      </feComponentTransfer>
    </filter>
  );
}
