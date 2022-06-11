import { FrostedGlassFilter } from "./filters/FrostedGlass";
import { InfraredFilter } from "./filters/Infrared";
import { WaterDropsFilter } from "./filters/WaterDrops";
import { WaterDropsAnimatedFilter } from "./filters/WaterDropsAnimated";
import { MysteryFilter as GreenFilter } from "./filters/Mystery";
import { DiffuseFilter } from "./filters/Diffuse";
import { PixelatedFilter } from "./filters/Pixelated";
import { SharpenFilter } from "./filters/Sharpen";
import { PencilFilter } from "./filters/Pencil";

export const filters = {
  none: {},
  "Green Screen": {
    component: GreenFilter,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Solid_green.svg/2048px-Solid_green.svg.png"
  },
  "Frosted Glass": {
    component: FrostedGlassFilter,
    imageUrl:
      "https://5.imimg.com/data5/UP/HB/MY-49676519/frosted-glass-500x500.jpg"
  },
  Infrared: {
    component: InfraredFilter,
    imageUrl:
      "https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/6cc7c5bf39f84fed8b6c29f0e56e588d"
  },
  "Water Drops": {
    component: WaterDropsFilter,
    imageUrl:
      "https://www.easylinedrawing.com/wp-content/uploads/2021/12/water_drop_drawing_tutorial.png"
  },
  "Drops Animated": {
    component: WaterDropsAnimatedFilter,
    imageUrl:
      "https://img.freepik.com/free-vector/water-drop-splash-design-concept_1284-26169.jpg?w=2000"
  },
  Sharpen: {
    component: SharpenFilter,
    imageUrl:
      "https://media.istockphoto.com/vectors/red-pencil-sharpener-realistic-illustration-vector-id1158857742?k=20&m=1158857742&s=612x612&w=0&h=ECKGnK1kmCFN0I0Z92W5tCJ0KelxsTxQHV51wy4-wxE="
  },
  Diffuse: {
    component: DiffuseFilter,
    imageUrl: "https://f4.bcbits.com/img/0002068169_10.jpg"
  },
  Pixelated: {
    component: PixelatedFilter,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/A1xYts-p+EL.png"
  },
  Pencil: {
    component: PencilFilter,
    imageUrl:
      "data:image/png;base64,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"
  }
};
