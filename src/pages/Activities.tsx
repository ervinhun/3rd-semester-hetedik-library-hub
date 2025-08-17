import {useEffect, useState} from "react";
import type {Activity} from "../../Api.ts";
import {MyApiActivities} from "../MyApi.ts"

export default function Activities() {

    // READ all activities
    function getActivities() {
        MyApiActivities.api.v1ActivitiesList().then(activities => {
            setActivities(activities.data)
            console.log("API response (get):", activities.status, activities.statusText);

        })
    }

    function formatDate(date: string) {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }

    const [activities, setActivities] = useState<Activity[]>([])

    // load activities when component mounts
    useEffect(() => {
        getActivities()
    }, [])

    return (
        <>
            <div className="subpage-background">
                <div className="sub-header">
                    <p>📅 Activities</p>
                </div>
                <div className="activity-form">
                    {
                        activities.map(activity => {
                            return (
                                <>
                                    <div key={activity.id} className="activity-card">
                                        {/* Inline editable title */}
                                        <p className="activity-title">
                                            {activity.title}
                                        </p>
                                        <div key={activity.id + "jk"} className="activity-body">
                                            <p className="activity-due-date">Due Date: {formatDate(activity.dueDate)}</p>
                                            <p className="activity-body">Completed: {activity.completed ? "✅" : "X"}</p>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}