import * as React from "react"
import { Formik, FormikActions, FormikProps, Form } from "formik"
import * as Yup from "yup"
import Input from "../../../../components/Input/Input"
import Button from "../../../../components/Button/Button"
import { Row, Column, Map, Card } from "../../components/styledComponents"
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from "./style"

interface MyFormValues {
  firstName: string
  email: string
  message: string
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string().required("Required"),
})

const Contact: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{ firstName: "", email: "", message: "" }}
      onSubmit={(
        values: MyFormValues,
        actions: FormikActions<MyFormValues>
      ) => {
        setTimeout(() => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 700)
      }}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Locations And Hours</h2>
                <p>
                  We have three locations across the city. Click here for
                  location addresses and hours!
                </p>
                <Row rowLayout="space-between" stack>
                  <Card space="20px 20px" columnWidth="49%">
                    <Map>
                      <iframe
                        src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=830 St Clair Ave W, Toronto, ON M6C 1C1+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                        frameborder="0"
                        scrolling="no"
                        width="600"
                        height="400"
                      />
                    </Map>
                    <h2>St. Clair W</h2>
                    <h3>Lending Library and Sharing Depot</h3>
                    <p>St. Clair W 830 St. Clair W Toronto, ON M6C 1C1</p>
                    <p>Phone: 647 498 4087</p>
                    <a
                      href="https://torontonorth.myturn.com/library/inventory/browse"
                      target="_blank"
                    >
                      <h4>Browse Inventory</h4>
                    </a>
                    <h4>Open Hours</h4>
                    <ul>
                      <li>Sat: 10am-3pm</li>
                      <li>Sun: 11am-4pm</li>
                      <li>Tues: 3pm-8pm</li>
                      <li>Thurs: 3pm-8pm</li>
                    </ul>

                    <br />
                  </Card>
                  <Card space="20px 20px" columnWidth="49%">
                    <Map>
                      <iframe
                        src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=192 Spadina Ave, Toronto, ON M5T 2C2+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                        frameborder="0"
                        scrolling="no"
                        width="600"
                        height="400"
                      />
                    </Map>
                    <h2>Spadina</h2>
                    <h3>Lending Library, Sharing Depot and Makerspace</h3>
                    <p>192 Spadina Ave, Toronto, ON M5T 2C2</p>
                    <p>Phone: 647 715 4767</p>
                    <a
                      href="https://torontoeast.myturn.com/library/inventory/browse"
                      target="_blank"
                    >
                      <h4>Browse Inventory</h4>
                    </a>
                    <h4>Open Hours</h4>
                    <ul>
                      <li>Sat: 10am-3pm</li>
                      <li>Sun: 11am-4pm</li>
                      <li>Wed: 5pm-10pm</li>
                      <li>Thurs: 3pm-8pm</li>
                    </ul>
                  </Card>
                </Row>
                <Row rowLayout="space-between" stack>
                  <Card space="20px 20px" columnWidth="49%">
                    <Map>
                      <iframe
                        src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=1499 Queen St W, Toronto, ON M6R 1A3+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                        frameborder="0"
                        scrolling="no"
                        width="600"
                        height="400"
                      />
                    </Map>
                    <h2>Parkdale</h2>
                    <h3>Lending Library</h3>
                    <p>
                      1499 Queen Street West (Basement), Toronto, ON M6R 1A3
                    </p>
                    <p>Phone: 647 498 1258</p>
                    <a
                      href="https://irbe.myturn.com/library/inventory/browse"
                      target="_blank"
                    >
                      <h4>Browse Inventory</h4>
                    </a>

                    <h4>Open Hours</h4>
                    <ul>
                      <li>Sat: 10am-3pm</li>
                      <li>Sun: 11am-4pm</li>
                      <li>Tues: 3pm-8pm</li>
                      <li>Thurs: 3pm-8pm</li>
                    </ul>
                  </Card>
                  <Column columnMargin="30px" columnWidth="50%" />
                </Row>
                <h2>Browse Our Inventory</h2>
                <p>
                  What are you looking to borrow? We have over 10,000 items in
                  our inventory. Toronto Tool Library & Sharing Depot members
                  get access to tools, camping gear, board games, children’s
                  toys, party supplies and sports equipment starting at just
                  $55/year! Access what you need without the price tag or the
                  clutter in your home. Cut back on wasteful consumption by
                  borrowing instead of buying. Please return items to the same
                  location you borrowed them from. Explore the inventory by
                  clicking on the location nearest you. Happy sharing!
                </p>

                <h2>Contact Us</h2>
                <p>
                  StoryHub theme comes with a contact form built-in. You can use
                  this form with Gatsbay Js service and get up to 50 submissions
                  for free per form per month. Also, you can easily switch to
                  another service if you want.
                </p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="firstName"
                    value={`${values.firstName}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Name"
                    notification={`${
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : ""
                    }`}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    notification={`${
                      errors.email && touched.email ? errors.email : ""
                    }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Message"
                  notification={
                    errors.message && touched.message ? errors.message : ""
                  }
                />
                <Button
                  title="Submit"
                  type="submit"
                  isLoading={isSubmitting ? true : false}
                  loader="Submitting.."
                />
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  )
}

export default Contact
