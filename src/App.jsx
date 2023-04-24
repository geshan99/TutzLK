import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingleAd from "./pages/SingleAd";
import TutorProfile from "./pages/TutorProfile";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={Home}></Route>
					<Route path="/Login" Component={Login}></Route>
					<Route path="/SingleAd" Component={SingleAd}></Route>
					<Route
						path="/TutorProfile"
						Component={TutorProfile}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
