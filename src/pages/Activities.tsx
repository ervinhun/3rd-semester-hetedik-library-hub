import {useEffect, useState} from "react";
import type {Activity} from "../../Api.ts";
import {MyApiActivities} from "../MyApi.ts"
import {bodyTextColor, subPageCardTitle, subPageDiv1, subPageDiv2, subPageDivCard, subPageTitle} from "../Format.ts";

export default function Activities() {


    // READ all activities
    function getActivities() {
        MyApiActivities.api.v1ActivitiesList().then(activities => {
            setActivities(activities.data)
            console.log("API response (get):", activities.status, activities.statusText);

        })
    }

    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {
        getActivities()
    }, [])

    return (
            <>
                <div className={subPageDiv1}>
                    <p className={subPageTitle}>📅 Activities</p>
                </div>
                <div className={subPageDiv2} >
                    {
                        activities.map(activity => {
                            return (
                                    <div key={activity.id} className={subPageDivCard}>
                                        {/* Inline editable title */}
                                        <p className={subPageCardTitle}>
                                            {activity.title}
                                        </p>
                                        <div key={activity.id + "jk"}>
                                            <p className={bodyTextColor}>Due Date: {new Date(activity.dueDate!)!.toLocaleString()}</p>
                                            <p className={bodyTextColor}>Completed: {activity.completed ? "✅" : "X"}</p>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </>
    )
}