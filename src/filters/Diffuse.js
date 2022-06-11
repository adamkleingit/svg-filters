export function DiffuseFilter() {
  return (
    <g>
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

        <feDisplacementMap
          id="displacement"
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
          scale="15"
        />
      </filter>
      <animate
        href="#displacement"
        attributeName="scale"
        values="1;400"
        dur="3s"
        fill="freeze"
        repeatCount="indefinite"
      />
    </g>
  );
}
