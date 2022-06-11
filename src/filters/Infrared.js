export function InfraredFilter() {
  return (
    <filter id="filter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.5"
        numOctaves="5"
        seed="2"
        stitchTiles="stitch"
        x="0%"
        y="0%"
        width="640"
        height="480"
        result="turbOriginal"
      />
      <feComponentTransfer result="turb">
        <feFuncA type="linear" slope="0.4" />
      </feComponentTransfer>

      <feDisplacementMap in="SourceGraphic" in2="turb" scale="5" />
      <feBlend in2="turb" mode="multiply" />
      <feColorMatrix
        values="
        1 1 1 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 1 0
      "
      />
    </filter>
  );
}
