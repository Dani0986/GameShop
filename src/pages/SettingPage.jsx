import { BasicPage } from "../../src/components/user/BasicPage";
import Header from "../components/layaout/header";

export const SignUpPage = () => {
  return (
    <div>
    <Header />
      <BasicPage
      title='SignUpPage'
      description='Welcome to SignUp'
    />
    </div>
  );
};