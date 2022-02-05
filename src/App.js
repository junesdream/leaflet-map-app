import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { statesData } from "./data";
import "leaflet/dist/leaflet.css";
import "./App.css";

const center = [51.507351, -0.127758];

function App() {
	return (
		<MapContainer
			center={center}
			zoom={10}
			style={{ widht: "100vw", height: "100vh" }}
		>
			<TileLayer
				url=" https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=EakJQAY4d81HqPLY609n"
				attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
			/>
			{statesData.features.map((state) => {
				const coordinates = state.geometry.coordinates[0].map(
					(item) => [item[1], item[0]]
				);

				return (
					<Polygon
						pathOptions={{
							fillColor: "#FD8D3C",
							fillOpcity: 0.7,
							weight: 0.7,
							opacity: 1,
							dashArray: 3,
							color: "white",
						}}
						positions={coordinates}
						eventHanlders={{
							mouseover: (e) => {
								const layer = e.target;
								layer.setStyle({
									fillOpcity: 5,
									weight: 2,
									dashArray: "3",
									color: "white",
								});
							},
							mouseout: (e) => {
								const layer = e.target;
								layer.setStyle({
									fillOpcity: 0.7,
									weight: 2,
									dashArray: "3",
									color: "white",
									fillColor: "#FD8D3C",
								});
							},
							click: (e) => {
								const layer = e.target;
								layer.setStyle({
									fillOpcity: 5,
									weight: 2,
									dashArray: "3",
									color: "white",
								});
							},
						}}
					/>
				);
			})}
		</MapContainer>
	);
}

export default App;
