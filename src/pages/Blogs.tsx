import { useEffect, useState, memo } from "react"
import { BACKEND_URL } from "../config";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
    const [blogs, setBlogs] = useState([{}]);

    // useEffect(() => {
    //     const jwt: any = localStorage.getItem('token');
    //     fetch(`${BACKEND_URL}/api/v1/blog/bulk`, {
    //         method: 'get',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': jwt
    //         }
    //     })
    //         .then(async (res) => {
    //             if (!res.ok) {
    //                 throw new Error("Something went wrong");
    //             }
    //             const json = await res.json();
    //             setBlogs(json);
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    // }, []);

    return (
        <div className="flex justify-center">
            {/* {blogs.map((blog: any, index) => <BlogCard
                key={index}
                authorName={"Ankit K"}
                title={"blog.title"}
                content={blog.content}
                publishedDate={"9th Mar 2024"}
            />)} */}
            <BlogCard 
            authorName={"Ankit K"}
            title={"How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"} 
            content={"No need to create a fancy and modern website with hundreds of pages to make money online. --Making money online is the dream for many people around the globe"} 
            publishedDate={"9th Mar 2024"}/>
        </div>
    )
}
