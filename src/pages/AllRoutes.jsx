import { Login } from "./Login";
import { Signup } from "./signup";
import { Route, Routes } from "react-router-dom";
import { Workouts } from "./Workouts";
import { MyDashboard } from "./MyDashboard";
import { Home } from "./Home";
import { FoodRecommandations } from "./FoodRecommandations";


export const AllRoutes = () => {
    return (
        <>
            <div className="mt-20">
                <Routes>
                    <Route path="/workouts" element={<Workouts />} />
                    <Route path="/food&calories" element={<FoodRecommandations />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/mydashboard/" element={<MyDashboard />} />
                </Routes>
            </div>
        </>
    )
}