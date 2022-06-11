import Webcam from "react-webcam";
import { filters } from "./constants";

export function ElementWithFilter({ filter, elementType }) {
  return (
    <>
      {filter === filters["Green Screen"] && (
        <video loop autoPlay muted name="media">
          <source
            src="https://covver-images-dev.s3.eu-west-1.amazonaws.com/jurrasic.mp4"
            type="video/mp4"
          />
        </video>
      )}
      {elementType === "text" && (
        <div
          style={{
            fontSize: 80,
            color: "white",
            filter: `url(#filter)`
          }}
        >
          SVG Filters are Cool
        </div>
      )}
      {elementType === "image" && (
        <img
          style={{
            filter: `url(#filter)`,
            width: 640,
            height: 480
          }}
          width="640px"
          height="480px"
          alt="cat"
          src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg"
        />
      )}
      {elementType === "video" && (
        <video
          loop
          autoPlay
          muted
          name="media"
          style={{ filter: `url(#filter)` }}
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
      )}
      {elementType === "webcam" && (
        <Webcam style={{ filter: `url(#filter)` }} />
      )}
    </>
  );
}
