import { Form } from "./styles";

export const Forms = (props:any) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {props.children}
    </Form>
  )
}
