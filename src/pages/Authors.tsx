import {useEffect, useState} from "react";
import type {Author, Book} from "../../Api.ts";
import {MyApiActivities} from "../MyApi.ts"
import {bodyTextColor, subPageCardTitle, subPageDiv1, subPageDiv2, subPageDivCard, subPageTitle} from "../Format.ts";

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

    useEffect(() => {
        getAuthors()
        getBooks()
    }, [])

    return (
            <>
                <div className={subPageDiv1}>
                    <p className={subPageTitle}>👱 Authors</p>
                </div>
                <div className={subPageDiv2}>
                    {
                        activities.map(activity => {
                            return (
                                    <div key={activity.id} className={subPageDivCard}>
                                        {/* Inline editable title */}
                                        <p className={subPageCardTitle}>
                                            {activity.firstName} {activity.lastName}
                                        </p>
                                        <p className={bodyTextColor}>
                                            Book: {books.find(book => book.id === activity.idBook)?.title || "Unknown"}
                                        </p>
                                    </div>
                            )
                        })
                    }
                </div>
            </>
    )
}