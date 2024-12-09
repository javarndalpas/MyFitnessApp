import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Workouts } from './Workouts';

export const MyDashboard = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [userWorkouts, setUserWorkouts] = useState();
    const [completedWorkouts, setCompletedWorkouts] = useState();
    const [incompletedWorkouts, setIncompletedWorkouts] = useState();
    const [requiredAmount, setrequiredAmount] = useState(0);
    const [userfoods, setUserFoods] = useState()
    console.log(userfoods);
    const id = localStorage.getItem('userId');
    if (id == undefined) {
        navigate("/");
    }
    const protien = 50;

    const getData = async () => {
        try {
            const response = await fetch(`https://6750666869dc1669ec1afc0f.mockapi.io/auth/${id}`)
            const result = await response.json();
            setUserWorkouts(result.userWorkout);
            setUserFoods(result.userFood);
            console.log(result, "tytytytty");
            setData(result);
            const completed = result.userWorkout.filter((workout) => workout.completed === true);
            const Incompleted = result.userWorkout.filter((workout) => workout.completed === false);
            // console.log(result.userWorkout, "tytytytty");
            console.log(completed, "completed");
            console.log(Incompleted, "Incompleted");

            setCompletedWorkouts(completed);
            setIncompletedWorkouts(Incompleted)
            const required_amount = userfoods.reduce((acc, el) => (
                acc += el.protein

            ), 0)
            setrequiredAmount(required_amount);

            // console.log(required_amount,"======")
            // console.log(requiredAmount,"======")
        }
        catch (err) {
            console.log(err);
        }
    }
    const markAsCompleted = async (workoutId) => {
        try {
            console.log(workoutId, "yyyyy")
            const updatedWorkouts = userWorkouts.map(workout => {
                console.log(workout.id, "xxxxx")
                return workout.id === workoutId ? { ...workout, completed: !workout.completed } : workout
            }
            );
            const response = await fetch(`https://6750666869dc1669ec1afc0f.mockapi.io/auth/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    userWorkout: updatedWorkouts,
                }),
            });
            const updatedUser = await response.json();
            setUserWorkouts(updatedUser.userWorkout);
            console.log('Workout marked as completed:', updatedUser);
        } catch (err) {
            console.log('Error marking workout as completed:', err);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const addAWorkout =()=>{
        navigate("/workouts")
    }
    return (
        <>
            <div className="">
                {
                    data &&
                    (
                        <>
                            <div className='place-content-start py-4 bg-gray-300'>
                                <div className='text-4xl text-gray-600'>Welcome ! {data.firstName} {data.lastName} </div>
                                <div className='mt-4 grid grid-cols-2'>
                                    <p><strong>DOB :</strong> {data.birthdate}</p>
                                    <p><strong>Height :</strong> {data.height}</p>
                                    <p><strong>Weight :</strong> {data.weight}</p>
                                    <p><strong>Body Goals :</strong> {data.bodyGoals}</p>
                                </div>
                            </div>

                            <div className='mt-4 mb-4 bg-black p-4'>
                                <p className='text-4xl text-white'>My Workouts</p>
                                {/* <p className='text-2xl text-black'>An average human required 50 gm of protein in a day.</p> */}
                            </div>
                            <div className='py-2 bg-blue-500'>
                                <p className='text-2xl text-white'>Past Workouts</p>
                            </div>
                            <div className='flex flex-wrap gap-6 place-content-center mt-4'>
                                {
                                    completedWorkouts && completedWorkouts.length > 0 ?
                                        (
                                            completedWorkouts.map((workout) => (
                                                <div className="Grid grid-rows-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={workout.id}>
                                                    <a href="#">
                                                        <img className="rounded-t-lg" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/02/female-dumbbells-1296x728-header-1296x729.jpg?w=1155&h=2268" alt="" />
                                                    </a>
                                                    <div className="p-5">
                                                        <a href="#">
                                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{workout.name}</h5>
                                                        </a>
                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Reps:</strong> {workout.reps}</p>
                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Workout Sets</strong> {workout.sets}</p>
                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Rest Time:</strong> {workout.rest_time}</p>
                                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => markAsCompleted(workout.id)}>Completed</button>
                                                    </div>
                                                </div>
                                            ))
                                        ) :
                                        (
                                            <p> No workouts Found </p>
                                        )
                                }
                            </div>
                            <div className='py-2 my-4 bg-blue-500'>
                                <p className='text-2xl text-white'>Pending Workouts</p>
                            </div>
                            <div className='flex flex-wrap gap-6 place-content-center'>
                                {incompletedWorkouts && incompletedWorkouts.length > 0 ? (
                                    incompletedWorkouts.map((workout) => (
                                        <div key={workout.id}>
                                            <div className="Grid grid-rows-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                <a href="#">
                                                    <img className="rounded-t-lg" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/02/female-dumbbells-1296x728-header-1296x729.jpg?w=1155&h=2268" alt="" />
                                                </a>
                                                <div className="p-5">
                                                    <a href="#">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{workout.name}</h5>
                                                    </a>
                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Reps:</strong> {workout.reps}</p>
                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Workout Sets</strong> {workout.sets}</p>
                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Rest Time:</strong> {workout.rest_time}</p>

                                                    {workout.completed === true ?

                                                        (<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => markAsCompleted(workout.id)}>Complete</button>)
                                                        :
                                                        (<button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" onClick={() => markAsCompleted(workout.id)}>Incomplete</button>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>
                                    <p>No workouts found.</p>
                                    <button type="button" onClick={()=>addAWorkout()} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add a Workout</button>
                                    </div>
                                )}
                            </div>

                            <div className='mt-4 mb-4 bg-black p-4'>
                                <p className='text-4xl text-white'>Food and Calories</p>
                                <p className='text-2xl text-white'>An average human required {protien} gm of protein in a day.</p>
                                <p className='text-2xl text-white'> You required {requiredAmount} gm more to complete your diet </p>
                            </div>
                            <div className='flex flex-wrap gap-6 justify-center'>
                                {userfoods && userfoods.length > 0 ? (
                                    userfoods.map((food) => (
                                        <div key={food.id + Math.random()}>
                                            <div className="p-6 Grid grid-rows-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                <a href="#">
                                                    <img className="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRudytpIdVDX36gEv7WeMvcIMVFfJ4Gn0ng&s" alt="" />
                                                </a>
                                                <div className="p-5">
                                                    <a href="#">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.name}</h5>
                                                    </a>
                                                    <p className="text-xl font-semibold">{food.name}</p>
                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Recommended For:</strong> {food.recommendedFor}</p>
                                                    <p><strong>Calories:</strong> {food.calories} kcal</p>
                                                    <p><strong>Protein:</strong> {food.protein} g</p>
                                                    <p><strong>Carbs:</strong> {food.carbs} g</p>
                                                    <p><strong>Fats:</strong> {food.fats} g</p>
                                                    <p><strong>Meal Time:</strong> {food.recommendedTime}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No foods found.</p>
                                )}
                            </div>
                        </>
                    )
                }
            </div >
        </>

    )
}
