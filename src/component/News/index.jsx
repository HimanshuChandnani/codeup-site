import React, { useEffect, useState } from "react";
import { Title } from "../StyledComponents/style";
import Wrapper from "./style";
// import example_image from "../../images/codeup collage students.webp";
import axios from "axios";

const News = () => {
    // const details = [
    //     { image: example_image, title: "ACE Academy Launches New App", description: "ACE Academy is excited to announce the launch of its new app, designed to enhance the learning experience for students. The app will provide access to resources, mentorship, and a community of learners." },
    //     { image: example_image, title: "Upcoming Workshops", description: "Join us for our upcoming workshops on various topics, including coding, data science, and more. Stay tuned for dates and registration details!" },
    // ];
    const apiURL = "https://backend-auth-eosin.vercel.app/";

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${apiURL}api/news`).then((response) => {
            setData(response.data);
            console.log(response.data);
        });
    }, []);

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <Wrapper className="py-5">
            <Title>Updates & News</Title>
            <div className="container">
                <div className="row">
                    {data.map((item, index) => (
                        <div className={`${data.length < 2 ? "" : "col-lg-6"} row`} key={index}>
                            {item.image && (
                                <div className="news-image col-5">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            )}
                            <div className="col-7">
                                <h3>{item.title}</h3>
                                <p className="m-0">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default News;
