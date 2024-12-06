import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const FoodRecommandations = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const id = localStorage.getItem("userId")
    if (id == undefined) {
        navigate("/");
        // alert("Please login first")
    }
    const getData = async () => {

        try {
            const response = await fetch(`https://66db6975f47a05d55be7f16e.mockapi.io/foodandCalories`);
            const data = await response.json();
            setData(data);
        } catch (err) {
            console.log(err);
        }
    }

    const addFood = async (foodId) => {
        try {
            const food = data.find(food => food.id === foodId);
            const response = await fetch(`https://6750666869dc1669ec1afc0f.mockapi.io/auth/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...user,
                    userFood: [...user.userFood, food]
                })
            }
            );
            console.log(user.userFood, "uuuuuu")
            const updatedUser = await response.json();
            setUser(updatedUser);
            console.log('Food added:');
        } catch (err) {
            console.log('Error adding Food:', err);

        }
    }

    useEffect(() => {
        getData();
        const getUser = async () => {
            try {
                const response = await fetch(`https://6750666869dc1669ec1afc0f.mockapi.io/auth/${id}`);
                const result = await response.json();
                setUser(result);
            } catch (err) {
                console.log(err);
            }
        }
        getUser();
    }, [id]);

    return (
        <>
            <div className="flex flex-wrap gap-6">
                {data.map((food) => (
                    <div key={food.id} className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to="#">
                            <img className="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRudytpIdVDX36gEv7WeMvcIMVFfJ4Gn0ng&s" alt={food.name} />
                        </Link>
                        <p className="text-xl font-semibold">{food.name}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Recommended For:</strong> {food.recommendedFor}</p>
                        <p><strong>Calories:</strong> {food.calories} kcal</p>
                        <p><strong>Protein:</strong> {food.protein} g</p>
                        <p><strong>Carbs:</strong> {food.carbs} g</p>
                        <p><strong>Fats:</strong> {food.fats} g</p>
                        <p><strong>Meal Time:</strong> {food.recommendedTime}</p>
                        <button onClick={() => addFood(food.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add food
                        </button>
                    </div>
                ))}
            </div>
        </>

    )
}
