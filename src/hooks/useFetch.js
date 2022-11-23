import { useEffect, useState } from "react";

const useFetch = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://assignment-server-xi.vercel.app/courses")
        .then((res) => res.json())
            .then((data) => setCourses(data))
    }, []);
    return courses;
};

export default useFetch;