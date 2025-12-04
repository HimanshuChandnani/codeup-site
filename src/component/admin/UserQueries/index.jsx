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
        <div className="my-4">
            {/* <h3 className="mb-4">User Questions</h3> */}

            {loading && (
                <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            )}

            {error && <Alert variant="danger">Error: {error}</Alert>}

            {!loading && !error && (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            {/* <th>Email</th> */}
                            <th>Query</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queries.map((q, index) => (
                            <tr key={q.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div>{q.name}</div>
                                    <div className="small text-secondary">{q.email}</div>
                                </td>
                                {/* <td>{q.email}</td> */}
                                <td style={{ whiteSpace: "pre-wrap" }}>{q.query}</td>
                                <td>{new Date(q.created_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default UserQueries;
