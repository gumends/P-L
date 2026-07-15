"use client";

import { AdvancedMarker, APIProvider, Map, Pin } from "@vis.gl/react-google-maps";

const PARANA_CENTER = { lat: -24.89, lng: -51.55 };

const hubs = [
  { name: "Curitiba", lat: -25.4284, lng: -49.2733 },
  { name: "Londrina", lat: -23.3045, lng: -51.1696 },
  { name: "Maringá", lat: -23.4205, lng: -51.9333 },
  { name: "Cascavel", lat: -24.9555, lng: -53.4552 },
  { name: "Ponta Grossa", lat: -25.0916, lng: -50.1668 },
];

const mapStyles: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#0c1f17" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#7cb892" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0c1f17" }] },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#34d399", weight: 1.2 }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#163328" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f4a3a" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#071510" }],
  },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
];

const EMBED_URL =
  "https://maps.google.com/maps?q=Paran%C3%A1,+Brasil&hl=pt-BR&z=7&output=embed";

function MapEmbed() {
  return (
    <iframe
      title="Mapa do Paraná — Google Maps"
      src={EMBED_URL}
      className="h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

function InteractiveMap({ apiKey }: { apiKey: string }) {
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  return (
    <APIProvider apiKey={apiKey} language="pt-BR" region="BR">
      <Map
        defaultCenter={PARANA_CENTER}
        defaultZoom={7}
        minZoom={6}
        maxZoom={12}
        gestureHandling="cooperative"
        disableDefaultUI
        zoomControl
        styles={mapId ? undefined : mapStyles}
        mapId={mapId}
        className="h-full w-full"
        restriction={{
          latLngBounds: {
            north: -22.5,
            south: -27.0,
            west: -54.8,
            east: -47.8,
          },
          strictBounds: false,
        }}
      >
        {hubs.map((hub) => (
          <AdvancedMarker
            key={hub.name}
            position={{ lat: hub.lat, lng: hub.lng }}
            title={hub.name}
          >
            <Pin
              background="#34d399"
              borderColor="#064e3b"
              glyphColor="#022c22"
            />
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}

export function ParanaMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-emerald-950/40 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-sm text-emerald-200/70">Nossa atuação</p>
          <p className="text-lg font-medium text-white">Estado do Paraná</p>
        </div>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
          Google Maps
        </span>
      </div>

      <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
        <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
          {apiKey ? <InteractiveMap apiKey={apiKey} /> : <MapEmbed />}
          <div className="pointer-events-none absolute inset-0 rounded-b-3xl ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-emerald-950/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-emerald-950/50 to-transparent" />
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {hubs.slice(0, 4).map((hub) => (
            <span
              key={hub.name}
              className="rounded-full border border-white/15 bg-emerald-950/75 px-2.5 py-1 text-xs text-emerald-100/90 backdrop-blur-sm"
            >
              {hub.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
