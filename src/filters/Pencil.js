export function PencilFilter() {
  return (
    <filter id="filter">
      <feConvolveMatrix
        order="5"
        kernelMatrix="
        -1  -1  -1 -1 -1
        -1  -1  -1 -1 -1
        -1  -1  25  -1 -1
        -1  -1  -1 -1 -1
        -1  -1  -1 -1 -1
        "
      />
      <feColorMatrix
        values="
          1 1 1 0 0
          1 1 1 0 0
          1 1 1 0 0
          0 0 0 1 0
        "
      />
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 1 1 1 1 1 1 1" />
        <feFuncG type="discrete" tableValues="0 1 1 1 1 1 1 1" />
        <feFuncB type="discrete" tableValues="0 1 1 1 1 1 1 1" />
      </feComponentTransfer>
    </filter>
  );
}
