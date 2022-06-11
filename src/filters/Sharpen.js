export function SharpenFilter() {
  return (
    <filter id="filter">
      <feConvolveMatrix
        order="3"
        kernelMatrix="
        -1  -1  -1 
        -1  8.7 -1
        -1 -1   -1
        "
      />
    </filter>
  );
}
