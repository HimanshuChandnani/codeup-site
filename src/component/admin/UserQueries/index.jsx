import { useEffect, useState } from "react";
import { Spinner, Table, Alert, Container } from "react-bootstrap";

const UserQueries = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const response = await fetch("https://backend-auth-eosin.vercel.app/api/contact");
                if (!response.ok) throw new Error("Failed to fetch user queries");

                const data = await response.json();
                setQueries(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQueries();
    }, []);

    return (
        <Container className="my-4">
            <h3 className="mb-4">User Questions</h3>

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
                            <th>Email</th>
                            <th>Query</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queries.map((q, index) => (
                            <tr key={q._id}>
                                <td>{index + 1}</td>
                                <td>{q.name}</td>
                                <td>{q.email}</td>
                                <td style={{ whiteSpace: "pre-wrap" }}>{q.query}</td>
                                <td>{new Date(q.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default UserQueries;
