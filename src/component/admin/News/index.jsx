import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "./style";
import { CodeupButton } from "../../StyledComponents/style";
import { Trash2 } from "lucide-react";

const News = () => {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const apiURL = "https://backend-auth-eosin.vercel.app/";
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        axios.get(`${apiURL}api/news`).then((response) => {
            setNews(response.data);
        });
    }, []);

    const handlePostNews = async (e) => {
        e.preventDefault();
        if (!title || !description || !image) {
            alert("All fields are required");
            return;
        }

        if (!token) {
            alert("Unauthorized. Please sign in.");
            return;
        }

        const newEntry = { title, description, image };

        try {
            const response = await axios.post(`${apiURL}api/news`, newEntry, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setNews([...news, response.data.news]);
            setTitle("");
            setDescription("");
            setImage("");
        } catch (error) {
            console.error("Error posting news:", error.response?.data || error.message);
        }
    };

    const handleDeleteNews = async (id) => {
        if (!window.confirm("Are you sure you want to delete this news?")) return;

        if (!token) {
            alert("Unauthorized. Please sign in.");
            return;
        }

        try {
            await axios.delete(`${apiURL}api/news/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setNews(news.filter((item) => item._id !== id));
        } catch (error) {
            console.error("Error deleting news:", error.response?.data || error.message);
        }
    };

    return (
        <Wrapper>
            <div className="container mb-4">
                <form onSubmit={handlePostNews} className="my-4">
                    <h2 className="mb-3 text-center">Create News</h2>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
                    </div>
                    <CodeupButton type="submit">Create</CodeupButton>
                </form>
                <h3 className="mb-4 text-center">News Preview</h3>
                <div className="row">
                    {news.map((item) => (
                        <div className={`${news.length < 2 ? "" : "col-lg-6"} row`} key={item._id}>
                            {item.image && (
                                <div className="news-image col-5">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            )}
                            <div className="col-7">
                                <h3 className="title">{item.title}</h3>
                                <p className="m-0">{item.description}</p>
                            </div>
                            <div className="delete">
                                <Trash2 onClick={() => handleDeleteNews(item._id)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default News;
