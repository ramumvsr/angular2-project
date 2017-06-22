/**
 * Created by admin on 6/20/2017.
 */
import { RegisterForm } from './registerform/register';
import { Form1 } from './customform/from1';
import {About} from './about/about';
import {CourcesGetCall} from './cources/cources';

export const AppRoutes: any = [
  { path: "", component: Form1 },
  { path: "register", component: RegisterForm },
  {path:"about",component:About},
  {path:"cources",component:CourcesGetCall},
  {path:"formjson",component:Form1}
];

export const AppComponents: any = [
  Form1,
  RegisterForm,About,CourcesGetCall
];
