import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Form from "react-bootstrap/Form";
import { Button, Grid, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import Alert from "react-bootstrap/Alert";

export const Form1 = () => {
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const handleButtonClick = () => {
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_14doc9a",
        "template_m5u5tai",
        form.current,
        "LKS4sJ7QzWjxL5ve_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleButtonClick();
    reset();
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      {isAlertVisible ? (
        <Alert variant="success">
          thanks for contactin we will contat you soon !
        </Alert>
      ) : null}
      <Row>
        <Col xs={12} md={6}>
          <Form.Group gap={3} controlId="exampleForm.ControlTextarea1">
            <Form.Control
              className="mb-4"
              size="lg"
              type="text"
              placeholder="Name"
              name="from_name"
              {...register("from_name", { required: true })}
              aria-invalid={errors.from_name ? "true" : "false"}
            />
            {errors.from_name?.type === "required" && (
              <p className="p_er" role="alert">
                First name is required
              </p>
            )}

            <Form.Control
              className="mb-3"
              size="lg"
              type="email"
              placeholder="Email"
              name="form_email"
              {...register("form_email", {
                required: "Email Address is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              aria-invalid={errors.form_email ? "true" : "false"}
            />
            {errors.form_email && (
              <p p className="p_er" role="alert">
                {errors.form_email?.message}
              </p>
            )}

            <Form.Control
              className="mb-3"
              size="lg"
              type="number"
              placeholder="Phon no"
              name="number"
              {...register("number", {
                required: "Mobile number is required",
                maxLength: { value: 10, message: "Maximum lenth is 10 char.." },
                minLength: { value: 10, message: "Minimum lenth is 10 char.." },
              })}
              aria-invalid={errors.number ? "true" : "false"}
            />
            {errors.number && (
              <p p className="p_er" role="alert">
                {errors.number?.message}
              </p>
            )}
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Message:"
              rows={7}
              {...register("message", {
                required: "Message is required",
              })}
              aria-invalid={errors.message ? "true" : "false"}
            />
          </Form.Group>
          {errors.message && (
            <p className="p_er" role="alert">
              {errors.message?.message}
            </p>
          )}
        </Col>
      </Row>
      <Grid xs={12} sx={{ justifyContent: "end", display: "flex" }}>
        <Stack direction="row" spacing={2} pt={2}>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Grid>
    </form>
  );
};
