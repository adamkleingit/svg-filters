export function FrostedGlassFilter() {
  return (
    <filter id="filter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.1"
        numOctaves="5"
        seed="2"
        stitchTiles="stitch"
        x="0%"
        y="0%"
        width="640"
        height="480"
      />
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 0.6 1" />
        <feFuncG type="discrete" tableValues="0 0.6 1" />
      </feComponentTransfer>
      <feDisplacementMap
        id="displacement"
        xChannelSelector="R"
        yChannelSelector="G"
        in="SourceGraphic"
        scale="15"
      />
    </filter>
  );
}
