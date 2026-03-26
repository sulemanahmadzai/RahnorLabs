declare module "geojson-world-map" {
  import type { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";

  const world: FeatureCollection<Geometry, GeoJsonProperties>;
  export default world;
}
