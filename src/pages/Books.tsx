import {useEffect, useState} from "react";
import type {Book} from "../../Api.ts";
import {MyApiActivities} from "../MyApi.ts"
import {bodyTextColor, subPageCardTitle, subPageDiv1, subPageDiv2, subPageDivCard, subPageTitle} from "../Format.ts";

export default function Books() {

    // READ all activities
    function getBooks() {
        MyApiActivities.api.v1BooksList().then(activities => {
            setActivities(activities.data)
            console.log("API response (get):", activities.status, activities.statusText);

        })
    }

    const [activities, setActivities] = useState<Book[]>([])

    useEffect(() => {
        getBooks()
    }, [])

    return (

            <>
                <div className={subPageDiv1}>
                    <p className={subPageTitle}>📖 Books</p>
                </div>
                <div className={subPageDiv2}>
                    {
                        activities.map(activity => {
                            return (
                                    <div key={activity.id} className={subPageDivCard}>
                                        {/* Inline editable title */}
                                        <p className={subPageCardTitle}>
                                            {activity.title}
                                        </p>
                                        <div key={activity.id + "jk"}>
                                            <p className={bodyTextColor}><strong>Description:</strong> {activity.description}</p>
                                            <p className={bodyTextColor}><strong>Pages:</strong> {activity.pageCount}</p>
                                            <p className={bodyTextColor}><strong>Excerpt:</strong> {activity.excerpt}</p>
                                            <p className={bodyTextColor}><strong>Publish date:</strong> {new Date(activity.publishDate!)!.toLocaleDateString()}</p>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </>
    )
}