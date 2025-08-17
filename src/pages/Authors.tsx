import {useEffect, useState} from "react";
import type {Author, Book} from "../../Api.ts";
import {MyApiActivities} from "../MyApi.ts"

export default function Authors() {

    // READ all activities
    function getAuthors() {
        MyApiActivities.api.v1AuthorsList().then(activities => {
            setActivities(activities.data)
            console.log("API response (get):", activities.status, activities.statusText);
        })
    }

    function getBooks() {
        MyApiActivities.api.v1BooksList().then(query => {
            setBooks(query.data)
            console.log("API response (get):", query.status, query.statusText);
        })
    }

    const [activities, setActivities] = useState<Author[]>([])
    const [books, setBooks] = useState<Book[]>([])

    // load activities when component mounts
    useEffect(() => {
        getAuthors()
        getBooks()
    }, [])

    return (
        <>
            <div className="subpage-background">
                <div className="sub-header">
                    <p>👱 Authors</p>
                </div>
                <div className="activity-form">
                    {
                        activities.map(activity => {
                            return (
                                <>
                                    <div key={activity.id} className="activity-card">
                                        {/* Inline editable title */}
                                        <p className="activity-title">
                                            {activity.firstName} {activity.lastName}
                                        </p>
                                        <p className="activity-due-date">
                                            Book: {books.find(book => book.id === activity.idBook)?.title || "Unknown"}
                                        </p>
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