import React from 'react';
import usePostsQuery from '../../hooks/usePostsQuery';
import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HelpCenter';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { getMoment } from '../../functions/Converter'; '../../functions/Converter';

const Forum = () => {
    const { posts, loading, error } = usePostsQuery("-created_timestamp");
    // const { posts: posts2, loading: loading2, error: error2 } = usePostsQuery("-views");

    return (
        <div>
            <HomeNavbar />
            <Container fluid="md">
                <Row>
                    {/* <Col xs={12} md={2}>
                        <h1>Top Posts</h1>
                        {
                            loading2 ? (
                                <p>Loading...</p>
                            ) : error2 ? (
                                <p>Error: {error2.message}</p>
                            ) : (
                                posts2.map(post => (
                                    <Row key={post.id}>
                                        <h2>{post.title}</h2>
                                        <p>{post.views} views</p>
                                    </Row>
                                ))
                            )
                        }
                    </Col>
                    <Col xs={0} md={1}> */}

                    {/* </Col> */}
                    <Col xs={12} md={9}>
                        <Row>
                            <Col md={9}>
                                <h1>Post List</h1>
                            </Col>
                            <Col md={3}>
                                <Button href="/add-post">Add Post</Button>
                            </Col>
                        </Row>

                        {
                            loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>Error: {error.message}</p>
                            ) : (
                                <Table borderless>
                                    <tbody>
                                        {posts.map(post => (
                                            <tr key={post.id}>
                                                <td className="text-left"><a href={`/posts/${post.id}`}>{post.title}</a></td>
                                                <td className="text-right">{getMoment(post.created_timestamp)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )
                        }
                    </Col>
                </Row>
            </Container>
            <HomeFooter />
        </div>
    );
};

export default Forum;