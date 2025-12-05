import { useEffect, useState } from "react";
import { Spinner, Table, Alert, Container } from "react-bootstrap";
import { api } from "../../../auth/apiClient";

const UserQueries = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BASE_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                // const apiURL = "https://backend-auth-eosin.vercel.app/api/contact";
                const apiURL = `${BASE_URL}contact`;
                const response = await api.get(apiURL);
                // if (!response.ok) throw new Error("Failed to fetch user queries");

                const data = response.data;
                setQueries(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQueries();
    }, []);

    return (
        <div className="">
            {/* <h3 className="mb-4">User Questions</h3> */}

            {loading && (
                <div className="text-center">
                    <Spinner animation="border" variant="secondary" />
                </div>
            )}

            {error && <Alert variant="danger">Error: {error}</Alert>}

            {!loading && !error && (
                <div className="d-flex flex-column gap-2">
                    {queries.map((q, index) => (
                        <div className="rounded shadow-sm bg-white p-2" key={index}>
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <p className="m-0 fw-medium">{q.name}</p>
                                    <p className="m-0 small text-secondary">{q.email}</p>
                                </div>
                                <p className="small m-0 text-secondary">{new Date(q.created_at).toLocaleString()}</p>
                            </div>
                            <hr className="my-1" />
                            <p className="m-0 small text-break" style={{ whiteSpace: "pre" }}>
                                {q.query}
                            </p>
                        </div>
                    ))}
                </div>
                // <Table striped bordered hover responsive>
                //     <thead>
                //         <tr>
                //             <th>#</th>
                //             <th>Name</th>
                //             {/* <th>Email</th> */}
                //             <th>Query</th>
                //             <th>Date</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         {queries.map((q, index) => (
                //             <tr key={q.id}>
                //                 <td>{index + 1}</td>
                //                 <td>
                //                     <div>{q.name}</div>
                //                     <div className="small text-secondary">{q.email}</div>
                //                 </td>
                //                 {/* <td>{q.email}</td> */}
                //                 <td style={{ whiteSpace: "pre-wrap" }}>{q.query}</td>
                //                 <td>{new Date(q.created_at).toLocaleString()}</td>
                //             </tr>
                //         ))}
                //     </tbody>
                // </Table>
            )}
        </div>
    );
};

export default UserQueries;
