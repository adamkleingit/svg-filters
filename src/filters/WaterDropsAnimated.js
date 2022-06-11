export function WaterDropsAnimatedFilter() {
  return (
    <g>
      <filter width="640" height="2800" id="filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.05"
          numOctaves="1"
          seed="2"
          stitchTiles="stitch"
          x="0%"
          y="0%"
          width="640"
          height="2800"
        />
        <feOffset dx="0" dy="-1000" id="offset" />
        <feComponentTransfer>
          <feFuncR type="linear" slope="1" intercept="-0.6"></feFuncR>
          <feFuncG type="linear" slope="1" intercept="-0.6"></feFuncG>
        </feComponentTransfer>

        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
          in2="drops"
          scale="45"
        />
        <feOffset dx="-22" dy="-22" />
      </filter>
      <animate
        href="#offset"
        attributeName="dy"
        from="-2000"
        to="0"
        dur="75s"
        fill="freeze"
        repeatCount="indefinite"
      />
    </g>
  );
}
