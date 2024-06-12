import { BasicPage } from "../../src/components/user/BasicPage";
import Header from "../components/layaout/header";

export const SettingPage = () => {
  return (
    <div>
    <Header />
      <BasicPage
      title='SettingPage'
      description='Welcome to SignUp'
    />
    </div>
  );
};