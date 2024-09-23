import { Route, Routes } from "react-router-dom";
import { theme } from "./theme/theme";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { Review } from "./pages/chef/Review";
import { ChefBoard } from "./pages/chef/ChefBoard";
import { ChefPage } from "./pages/chef/ChefPage";
import { CustomerBoard } from "./pages/customer/CustomerBoard";
import { CustomerHistory } from "./pages/customer/CustomerHistory";
import { CustomerMatch } from "./pages/customer/CustomerMatch";
import { CustomerKitchenWrite } from "./pages/customer/CustomerKitchenWrite";
import { ReviewPage } from "./pages/customer/ReviewPage";
import { ChefList } from "./pages/customer/ChefList";
import { ChefActivityWrite } from "./pages/chef/ChefActivityWrite";
import { CustomerPage } from "./pages/customer/CustomerPage";
import { LoginCustomer } from "./pages/account/LoginCustomer";
import { LoginChef } from "./pages/account/LoginChef";
import { FindIdEmail } from "./pages/account/FindAccount/FindIdEmail";
import { FindIdNumber } from "./pages/account/FindAccount/FindIdNumber";
import { FindPwdEmail } from "./pages/account/FindAccount/FindPwdEmail";
import { FindPwdNumber } from "./pages/account/FindAccount/FindPwdNumber";
import { RecoverPwd } from "./pages/account/FindAccount/RecoverPwd";
import { SelectSignUp } from "./pages/account/SignUp/SelectSignUp";
import { SignUpChef } from "./pages/account/SignUp/SignUpChef";
import { SignUpCustomer } from "./pages/account/SignUp/SignUpCustomer";
import { ApiTest } from "./pages/ApiTest";
import Reserve from "./pages/chef/Reserve";
import { getToken } from "./token.jsx";

// 로그인 했을 때 경로
export const LoggedInRouterList = [
  {
    path: "/customerPage/",
    key: "/customerPage/",
    element: <CustomerPage />,
    theme: theme,
  },
  {
    path: "/chefPage",
    key: "/chefPage",
    element: <ChefPage />,
    theme: theme,
  },
  {
    path: "/customerPage/edit",
    key: "/customerPage/edit",
    element: <CustomerKitchenWrite />,
    theme: theme,
  },
  {
    path: "/reserve",
    key: "/reserve",
    element: <Reserve />,
    theme: theme,
  },
  {
    path: "/review",
    key: "/review",
    element: <Review />,
    theme: theme,
  },
  {
    path: "/customerBoard",
    key: "/customerBoard",
    element: <CustomerBoard />,
    theme: theme,
  },
  {
    path: "/customerHistory",
    key: "/customerHistory",
    element: <CustomerHistory />,
    theme: theme,
  },
  {
    path: "/reviewPage",
    key: "/reviewPage",
    element: <ReviewPage />,
    theme: theme,
  },
  {
    path: "/customerMatch",
    key: "/customerMatch",
    element: <CustomerMatch />,
    theme: theme,
  },
];

// 로그아웃 했을 때 사용 경로
export const LoggedOutRouterList = [
  {
    path: "/login",
    key: "/login",
    element: <LoginCustomer />,
    theme: theme,
  },
  {
    path: "/loginChef",
    key: "/loginChef",
    element: <LoginChef />,
    theme: theme,
  },
  {
    path: "/findIdEmail",
    key: "/findIdEmail",
    element: <FindIdEmail />,
    theme: theme,
  },
  {
    path: "/findIdNumber",
    key: "/findIdNumber",
    element: <FindIdNumber />,
    theme: theme,
  },
  {
    path: "/findPwdEmail",
    key: "/findPwdEmail",
    element: <FindPwdEmail />,
    theme: theme,
  },
  {
    path: "/findPwdNumber",
    key: "/findPwdNumber",
    element: <FindPwdNumber />,
    theme: theme,
  },
  {
    path: "/recoverPwd",
    key: "/recoverPwd",
    element: <RecoverPwd />,
    theme: theme,
  },
  {
    path: "/selectSignUp",
    key: "/selectSignUp",
    element: <SelectSignUp />,
    theme: theme,
  },
  {
    path: "/signUpChef",
    key: "/signUpChef",
    element: <SignUpChef />,
    theme: theme,
  },
  {
    path: "/signUpCustomer",
    key: "/signUpCustomer",
    element: <SignUpCustomer />,
    theme: theme,
  },
];

// 기존에 있었던 route 저장
{
  /* <Route path="/login" element={<LoginCustomer />} theme={theme} />
<Route path="/loginChef" element={<LoginChef />} theme={theme} />
<Route path="/findIdEmail" element={<FindIdEmail />} theme={theme} />
<Route
  path="/findIdNumber"
  element={<FindIdNumber />}
  theme={theme}
/>
<Route
  path="/findPwdEmail"
  element={<FindPwdEmail />}
  theme={theme}
/>
<Route
  path="/findPwdNumber"
  element={<FindPwdNumber />}
  theme={theme}
/>
<Route path="/recoverPwd" element={<RecoverPwd />} theme={theme} />
<Route
  path="/selectSignUp"
  element={<SelectSignUp />}
  theme={theme}
/>
<Route path="/signUpChef" element={<SignUpChef />} theme={theme} />
<Route
  path="/signUpCustomer"
  element={<SignUpCustomer />}
  theme={theme}
/>
<Route
  path="/customerpage"
  element={<CustomerPage />}
  theme={theme}
/>
<Route
  path="/customerpage/edit"
  element={<CustomerKitchenWrite />}
  theme={theme}
/>
<Route path="/reserve" element={<Reserve />} theme={theme} />
<Route path="/chefpage" element={<ChefPage />} theme={theme} />
<Route
  path="/chefpage/edit"
  element={<ChefActivityWrite />}
  theme={theme}
/>
<Route
  path="/customerboard"
  element={<CustomerBoard />}
  theme={theme}
/>
<Route
  path="/customerhistory"
  element={<CustomerHistory />}
  theme={theme}
/>
<Route path="/reviewpage" element={<ReviewPage />} theme={theme} />
<Route
  path="/customerMatch"
  element={<CustomerMatch />}
  theme={theme}
/>
</Route> */
}
