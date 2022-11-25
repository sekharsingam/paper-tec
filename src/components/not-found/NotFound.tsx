import { Result } from "antd";


export const NotFound: React.FC = () => ( 
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    // extra={<Button type="primary">Back Home</Button>}
  />
)