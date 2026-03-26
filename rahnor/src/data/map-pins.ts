export interface MapPin {
  name: string;
  coordinates: [number, number];
}

export const mapPins: MapPin[] = [
  { name: "New York, USA", coordinates: [-74.006, 40.7128] },
  { name: "Los Angeles, USA", coordinates: [-118.2437, 34.0522] },
  { name: "London, UK", coordinates: [-0.1278, 51.5074] },
  { name: "Sydney, Australia", coordinates: [151.2093, -33.8688] },
  { name: "Dubai, UAE", coordinates: [55.2708, 25.2048] },
  { name: "Riyadh, Saudi Arabia", coordinates: [46.7219, 24.6877] },
  { name: "Toronto, Canada", coordinates: [-79.3832, 43.6532] },
  { name: "Berlin, Germany", coordinates: [13.405, 52.52] },
  { name: "Amsterdam, Netherlands", coordinates: [4.9041, 52.3676] },
  { name: "Islamabad, Pakistan", coordinates: [73.0479, 33.6844] },
];
