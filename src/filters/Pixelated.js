// https://stackoverflow.com/questions/37451189/can-one-pixelate-images-with-an-svg-filter
export function PixelatedFilter() {
  return (
    <filter id="filter">
      <feGaussianBlur stdDeviation="2" result="smoothed" />
      <feImage
        width="15"
        height="15"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC"
        result="displacement-map"
      />
      <feTile />
      <feDisplacementMap
        in="smoothed"
        xChannelSelector="R"
        yChannelSelector="G"
        scale="50"
        result="pre-final"
      />
    </filter>
  );
}
