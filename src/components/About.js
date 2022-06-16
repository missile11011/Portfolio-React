import React, {useRef, useEffect} from "react";
import "../index.css";
import * as THREE from "three";
import {Canvas, useFrame, extend} from "@react-three/fiber";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import iosevka from "../assets/fonts/Iosevka.json";
import {MeshWobbleMaterial, Bounds, OrbitControls} from "@react-three/drei";

function Box() {
	useFrame(({clock}) => {
		const a = clock.getElapsedTime();
		myMesh.current.rotation.x = a;
	});
	const myMesh = useRef();

	useFrame(({clock}) => {
		const a = clock.getElapsedTime();
		myMesh.current.rotation.x = a;
	});
	return (
		<mesh
			ref={myMesh}
			rotation={
				new THREE.Euler(
					THREE.MathUtils.degToRad(0),
					THREE.MathUtils.degToRad(0),
					THREE.MathUtils.degToRad(20)
				)
			}
			position={[0, 6, 0]}
		>
			<boxGeometry args={[4, 4, 4]} />
			<MeshWobbleMaterial color="white" factor={0.5} speed={0.75} />
		</mesh>
	);
}
function Sphere() {
	useFrame(({clock}) => {
		const a = clock.getElapsedTime();
		myMesh.current.rotation.x = a;
	});
	const myMesh = React.useRef();
	useFrame(({clock}) => {
		const a = clock.getElapsedTime();
		myMesh.current.rotation.x = a;
	});
	return (
		<mesh
			ref={myMesh}
			rotation={
				new THREE.Euler(
					THREE.MathUtils.degToRad(15),
					THREE.MathUtils.degToRad(0),
					THREE.MathUtils.degToRad(30)
				)
			}
			position={[-12, 5, 0]}
			scale={3}
		>
			<sphereGeometry />
			<MeshWobbleMaterial color="white" factor={20} speed={0.5} />
		</mesh>
	);
}
function Dodecahedron() {
	useFrame(({clock}) => {
		const a = clock.getElapsedTime();
		myMesh.current.rotation.x = a;
	});
	const myMesh = React.useRef();
	useFrame(({clock}) => {
		const a = clock.getElapsedTime();
		myMesh.current.rotation.x = a;
	});
	return (
		<mesh ref={myMesh} position={[12, 4, 0]} scale={3}>
			<dodecahedronGeometry args={[1.1, 0]} />
			<MeshWobbleMaterial color="white" factor={1.75} speed={1} />
		</mesh>
	);
}
function About() {
	useEffect(() => {
		extend({TextGeometry, FontLoader});
	}, []);
	const font = new FontLoader().parse(iosevka);

	return (
		<>
			<div className="w-100 vh-100">
				<Canvas
					shadows
					dpr={[1, 2]}
					camera={{
						fov: 80,
						near: 0.1,
						far: 10,
						position: [0, 20, 15],
						zoom: 1,
					}}
				>
					<color attach="background" args={["#000000"]} />
					<ambientLight color="white" intensity={0.1} />
					<directionalLight color="magenta" position={[-5, 11, 5]} />
					<directionalLight color="cyan" position={[5, 11, 5]} />
					<gridHelper args={[500, 200, "#707070", "#303030"]} />
					<OrbitControls
						makeDefault
						minAzimuthAngle={0}
						maxAzimuthAngle={Math.PI / 0}
						minPolarAngle={Math.PI / 3}
						maxPolarAngle={Math.PI / 3}
						enableZoom={false}
						enablePan={false}
						zoomSpeed={0.3}
					/>
					<Box />
					<Sphere />
					<Dodecahedron />
					<Bounds fit clip observe margin={1}>
						<mesh
							rotation={[
								THREE.MathUtils.degToRad(340),
								THREE.MathUtils.degToRad(0),
								THREE.MathUtils.degToRad(0),
							]}
							position={[-8, 10, -3]}
						>
							<textGeometry
								args={[
									"Hello I'm Misael",
									{font, size: 1.5, height: 2},
								]}
							/>
							<meshStandardMaterial
								attach="material"
								color="cyan"
							/>
						</mesh>
						<mesh
							rotation={[
								THREE.MathUtils.degToRad(330),
								THREE.MathUtils.degToRad(0),
								THREE.MathUtils.degToRad(0),
							]}
							position={[-13.5, 0, 3]}
						>
							<textGeometry
								args={[
									"I'am a FullStack Developer",
									{font, size: 1.5, height: 2},
								]}
							/>
							<meshStandardMaterial
								attach="material"
								color="magenta"
							/>
						</mesh>
					</Bounds>
				</Canvas>
				<a href="#About-me">
					<button
						class="btn btn-sm btn-outline-light text-light scroll-btn px-auto position-absolute
						start-50 bottom-0 translate-middle"
						href="#About-me"
					>
						<p>scroll</p>
						<i class="bi bi-arrow-down-circle"></i>
					</button>
				</a>
			</div>

			<article
				id="About-me"
				className="light-color flex-wrap row align-items-center justify-content-center "
			>
				<img
					id="portrait"
					className="rounded-circle col-md-3 col-sm-6 py-3"
					src={process.env.PUBLIC_URL + "/images/portrait.jpg"}
					alt="portrait picture"
				/>
				<div className="col-8">
					<h2 className="text-center inline-flex">About Me</h2>
					<p>
						Hello my name is Misael Reyes and I'm based in Dallas
						Tx. I'm a self taught software developer and web
						developer for a year. Then I got my certificate for
						coding at SMU in late 2021. I'm currently looking for
						part-time, full-time, or freelance work.
					</p>
				</div>
			</article>
			<div className="container">
				<div className="text-center">
					<h2 className="text-center my-4">Skills</h2>
				</div>
				
				<div className="row row-cols-md-5 row-cols-2 py-3 ">
					<div className="col flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/html5-logo.png"
							}
						/>
						<p className="mx-auto">HTML5</p>
					</div>

					<div className="col flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL + "/images/css3-logo.png"
							}
						/>
						<p className="mx-auto">CSS3</p>
					</div>

					<div className="col flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL + "/images/node-logo.png"
							}
						/>
						<p className="mx-auto">Node</p>
					</div>

					<div className="col flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/python-logo.png"
							}
						/>
						<p className="text-center">Python</p>
					</div>

					<div className="col  flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/javascript-logo.png"
							}
						/>
						<p className="text-center">JavaScript</p>
					</div>
					<div className="col  flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/react-logo.png"
							}
						/>
						<p className="text-center">React</p>
					</div>

					<div className="col  flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/mongodb-logo.png"
							}
						/>
						<p className="text-center">MongoDB</p>
					</div>

					<div className="col flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/mysql-logo.png"
							}
						/>
						<p className="mt-auto mx-auto">MySQL</p>
					</div>

					<div className="col  flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/GraphQL-logo.png"
							}
						/>
						<p className="mx-auto">GraphQL</p>
					</div>
					<div className="col flex-column d-flex">
						<img
							className="img-fluid my-auto"
							src={
								process.env.PUBLIC_URL +
								"/images/docker-logo.png"
							}
						/>
						<p className="mx-auto">Docker</p>
					</div>
				</div>
				<div className="row py-3"></div>
			</div>
		</>
	);
}

export default About;
