import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export const Workouts = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const id = localStorage.getItem("userId")
    // const [presentWorkout,setPresentWorkout] = ([workoutId])
    if (id == undefined) {
        navigate("/");
    }
    const getData = async () => {
        try {
            const response = await fetch(`https://6750666869dc1669ec1afc0f.mockapi.io/workouts`);
            const data = await response.json();
            console.log(data, "===============")
            setData(data);
        } catch (err) {
            console.log(err);
        }
    }
    const addWorkout = async (workoutId) => {
        try {
            // if(presentWorkout.include(workoutId)) return

            const workout = data.find(workout => workout.id === workoutId);
            const response = await fetch(`https://6750666869dc1669ec1afc0f.mockapi.io/auth/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...user,
                    userWorkout: [...user.userWorkout, { ...workout, completed: false }],
                })
            });
            const updatedUser = await response.json();
            setUser(updatedUser);
            toast(' Workout Added Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

            console.log('Workout added:', updatedUser);
        } catch (err) {
            console.log('Error adding workout:', err);
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
                {data.map((workout) => (
                    <div key={workout.id} className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="grid-cols-2">
                            <Link to="#">
                                <img className="rounded-t-lg object-cover w-full h-48" src={workout.img_url} alt={workout.name} />
                            </Link>
                            <p className="text-xl-4 ">{workout.name}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Difficulty:</strong> {workout.difficulty}</p>
                            <p><strong>Reps:</strong> {workout.reps}</p>
                            <p><strong>Rest Time:</strong> {workout.rest_time}</p>
                            <p><strong>Sets:</strong> {workout.sets}</p>
                            <button onClick={() => addWorkout(workout.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Add Workout
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
