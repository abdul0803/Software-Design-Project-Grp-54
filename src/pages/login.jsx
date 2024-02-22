import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container } from "react-bootstrap";

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, implement your authentication logic
    console.log("Login Attempt:", credentials);

    // Simulate successful login then redirect to profile management
    // In a real app, you would verify credentials before redirecting
    navigate("/profile-management");
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <Card style={{ width: '40rem' }}>
          <Card.Body>
            <div className="m-4">
              <Form onSubmit={handleSubmit}> {/* Add the onSubmit handler */}
                <Form.Group controlId="formBasicUsername">
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      required
                      style={{width: '200px'}}
                      className="form-control-sm"
                      name="username" // Add name attribute for handleChange
                      value={credentials.username} // Controlled component
                      onChange={handleChange} // Set onChange to update state
                    />
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Form.Text className="text-muted" style={{padding: '10px'}}>
                      Please enter your unique username.
                    </Form.Text>
                  </div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      style={{width: '200px'}}
                      className="form-control-sm"
                      name="password"
                      value={credentials.password} 
                      onChange={handleChange} 
                    />
                  </div>
                </Form.Group>
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: "10px"}}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <div>
                <span><a href="/register">Register Account</a></span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default LoginPage;
