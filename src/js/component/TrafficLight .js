// import React from "react";

// constructor(){
//     super();
//     this.State ={
//         clicketLight=null
//     };
//     }

//create your first component
// export function Home() {
// 	return (
// 		<div>
// 			<div className="trafficlight">
// 				<div className="red" onClick={() => this set.State({clicketLight:"red"})}> </div>
// 				<div className="yellow" onClick={() => this set.State({clicketLight:"yellow"})}></div>
// 				<div className="green" onClick={() => this set.State({clicketLight:"green"})}></div>
// 			</div>
// 		</div>
// 	);
// }

import React, { useState } from "react";

//create your first component
export function TrafficLight() {
	const [color, setColor] = useState("red");
	return (
		<div className="text-center mt-5">
			<ul className="trafficLight">
				<li
					onClick={() => setColor("red")}
					className={color === "red" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("yellow")}
					className={color === "yellow" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("green")}
					className={color === "green" ? "selected" : ""}
				/>
			</ul>
		</div>
	);
}
