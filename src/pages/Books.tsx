import {useEffect, useState} from "react";
import type {Book} from "../../Api.ts";
import {MyApiActivities} from "../MyApi.ts"

export default function Books() {

    // READ all activities
    function getBooks() {
        MyApiActivities.api.v1BooksList().then(activities => {
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

    const [activities, setActivities] = useState<Book[]>([])

    // load activities when component mounts
    useEffect(() => {
        getBooks()
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
                                            <p className="activity-due-date">Description: {activity.description}</p>
                                            <p className="activity-body">Pages: {activity.pageCount}</p>
                                            <p className="activity-body">{activity.excerpt}</p>
                                            <p className="activity-body">{formatDate(activity.publishDate)}</p>
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