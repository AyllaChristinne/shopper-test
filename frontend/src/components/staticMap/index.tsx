import polyline from "@mapbox/polyline";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationPinIcon from "../../assets/location-pin.png";
import styles from "./index.module.scss";

interface IProps {
  markers: { lat: number; lng: number }[];
  polylineString: string;
}

export const StaticMap = ({ markers, polylineString }: IProps) => {
  const decodedPath = polyline.decode(polylineString);
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) return;
    if (mapContainerRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: [51.505, -0.09],
        zoom: 13,
        boxZoom: false,
        doubleClickZoom: false,
        dragging: false,
        zoomControl: false,
        scrollWheelZoom: false,
        trackResize: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current
      );

      L.polyline(decodedPath, {
        color: "purple",
        weight: 4,
        opacity: 0.7,
      }).addTo(mapRef.current);

      const icon = new L.Icon({
        iconUrl: locationPinIcon,
        iconSize: [32, 32],
        iconAnchor: [18, 28],
      });

      markers.forEach((marker) => {
        L.marker([marker.lat, marker.lng], { icon }).addTo(mapRef.current!);
      });

      mapRef.current.fitBounds(L.polyline(decodedPath).getBounds());
    }
  }, [decodedPath, markers]);

  return (
    <div id="map" ref={mapContainerRef} className={styles.mapContainer}></div>
  );
};
