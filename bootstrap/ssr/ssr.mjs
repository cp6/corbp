import * as jsxRuntime from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, createContext, useState, useContext, Fragment as Fragment$1 } from "react";
import { Link, useForm, Head, usePage, createInertiaApp } from "@inertiajs/react";
import { Transition, Dialog } from "@headlessui/react";
import { HiPencil, HiArrowLeft, HiDownload, HiPlus, HiCog, HiExclamationCircle, HiCamera, HiCalendar, HiGlobe, HiTag } from "react-icons/hi/index.js";
import { format } from "date-fns";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import route$1 from "ziggy-js";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, viewBox: "0 0 316 316", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }) });
}
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-200 dark:bg-slate-900", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-20 h-20 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-100 dark:bg-slate-700 shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 mt-2" + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 dark:text-gray-300 mb-2 mt-2 md:mt-0` + className, children: value ? value : children });
}
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full dark:bg-slate-500 dark:text-white" + className,
      ref: input
    }
  ) });
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: onHandleChange
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Checkbox, { name: "remember", value: data.remember, onChange: handleOnChange }),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Log in" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Already registered?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Register" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-green-400 text-gray-900 dark:text-white focus:border-green-700 " : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white dark:bg-slate-700", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:dark:bg-gray-800 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavBar({ auth, type = "submit", className = "", processing, children, onClick }) {
  const user = auth;
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true);
  function processThemeChange() {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }
  function switchTheme() {
    setIsDarkTheme((isDarkTheme2) => !isDarkTheme2);
    processThemeChange();
  }
  return /* @__PURE__ */ jsxs("nav", { className: "bg-gray-100 dark:bg-slate-800 border-b border-gray-300 dark:border-slate-800", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-1 sm:px-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "hidden space-x-8 sm:-my-px sm:flex", children: [
        /* @__PURE__ */ jsx(NavLink, { href: route("home"), active: route().current("home"), children: "Home" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("locations.index"), active: route().current("locations.*"), children: "Locations" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("device.index"), active: route().current("device.*"), children: "Devices" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("lens.index"), active: route().current("lens.*"), children: "Lens" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("tag.index"), active: route().current("tag.*"), children: "Tags" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("random"), children: "Random image" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("stats"), active: route().current("stats"), children: "Stats" }),
        (() => {
          if (user.user !== null) {
            return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(NavLink, { href: route("upload"), active: route().current("upload"), children: "Upload" }) });
          }
        })(),
        /* @__PURE__ */ jsx(NavLink, { children: /* @__PURE__ */ jsxs(
          "button",
          {
            id: "theme-toggle",
            onClick: switchTheme,
            type: "button",
            className: "text-gray-500 dark:text-gray-400 rounded-md text-sm p-2.5 themeToggle",
            title: isDarkTheme ? "Make it light" : "Make it dark",
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  id: "theme-toggle-dark-icon",
                  className: isDarkTheme ? "w-5 h-5 hidden" : "w-5 h-5 text-gray-600 hover:text-gray-900",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  id: "theme-toggle-light-icon",
                  className: isDarkTheme ? "w-5 h-5 text-gray-200 hover:text-gray-100" : "w-5 h-5 hidden",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ]
          }
        ) }),
        (() => {
          if (user.user === null) {
            return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
              NavLink,
              {
                href: route("login"),
                active: route().current("login"),
                className: "dark:text-blue-400",
                children: "Login"
              }
            ) });
          }
        })()
      ] }) }),
      (() => {
        if (user.user !== null) {
          return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
            /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
                children: [
                  auth.user.name,
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  )
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
              /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
              /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
            ] })
          ] }) }) }) });
        }
      })(),
      /* @__PURE__ */ jsx("div", { className: "mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
          className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-400 focus:text-gray-500 focus:dark:text-gray-700 transition duration-150 ease-in-out",
          children: /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "h-6 w-6",
              stroke: "currentColor",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: showingNavigationDropdown ? "inline-flex" : "hidden",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              ]
            }
          )
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-3 space-y-1", children: [
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("home"), active: route().current("home"), children: "Home" }),
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("locations.index"), active: route().current("locations.*"), children: "Locations" }),
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("device.index"), active: route().current("device.*"), children: "Devices" }),
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("lens.index"), active: route().current("lens.*"), children: "Lens" }),
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("tag.index"), active: route().current("tag.*"), children: "Tags" }),
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("random"), children: "Random image" }),
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("stats"), active: route().current("stats"), children: "Stats" })
      ] }),
      (() => {
        if (user.user !== null) {
          return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: auth.user.name }),
              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: auth.user.email })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                id: "theme-toggle-mobile",
                onClick: switchTheme,
                type: "button",
                className: "text-gray-500 dark:text-gray-400 rounded-md text-sm p-2.5 themeToggle",
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      id: "theme-toggle-dark-icon",
                      className: isDarkTheme ? "w-5 h-5 hidden" : "w-5 h-5 text-gray-600 hover:text-gray-900",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      id: "theme-toggle-light-icon",
                      className: isDarkTheme ? "w-5 h-5 text-gray-200 hover:text-gray-100" : "w-5 h-5 hidden",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                          fillRule: "evenodd",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
              /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
              /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
            ] })
          ] }) });
        }
      })()
    ] })
  ] });
}
function ResponseAlert({ type, text }) {
  if (type === "success") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
        role: "alert",
        children: text
      }
    );
  } else if (type === "failure") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
        role: "alert",
        children: text
      }
    );
  } else if (type === "warning") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
        role: "alert",
        children: text
      }
    );
  } else {
    return /* @__PURE__ */ jsx("div", { className: "py-6" });
  }
}
function EditButton({ link, text }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: link,
      className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      children: [
        /* @__PURE__ */ jsx(HiPencil, { className: "inline mr-1 mb-1 text-white" }),
        text
      ]
    }
  );
}
function MainLayout({ auth, title, header, children, response = null, media = false, media_id = null }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-200 dark:bg-slate-900", children: [
      /* @__PURE__ */ jsx(NavBar, { auth }),
      (() => {
        if (media && header) {
          return /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-1 sm:px-2 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-10 py-4 px-2", children: [
              /* @__PURE__ */ jsx(
                "h1",
                {
                  className: "font-semibold text-xl md:text-3xl text-gray-800 dark:text-gray-100 tracking-wide mb-2",
                  children: header
                }
              ),
              response !== null ? /* @__PURE__ */ jsx(ResponseAlert, { type: response.type, text: response.message }) : ""
            ] }),
            /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-2 sm:py-6 md:mt-2 md:text-end", children: (() => {
              if (auth.user !== null) {
                return /* @__PURE__ */ jsx(EditButton, { text: "Edit media", link: route("media.edit", media_id) });
              }
            })() })
          ] }) });
        } else if (!media && header) {
          return /* @__PURE__ */ jsx("header", { className: "bg-gray-200 dark:bg-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto py-4 px-2", children: [
            /* @__PURE__ */ jsx(
              "h1",
              {
                className: "font-semibold text-xl md:text-3xl text-gray-800 dark:text-gray-100 tracking-wide mb-2",
                children: header
              }
            ),
            response !== null ? /* @__PURE__ */ jsx(
              ResponseAlert,
              {
                type: response.type,
                text: response.message
              }
            ) : ""
          ] }) });
        } else {
          return "<div></div>";
        }
      })(),
      /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-1 sm:px-2 space-y-4", children }),
        /* @__PURE__ */ jsxs("p", { className: "text-center mt-10 text-sm text-gray-600 dark:text-gray-500 italic", children: [
          "corbpie ",
          new Date().getFullYear(),
          " | ",
          /* @__PURE__ */ jsx("a", { href: "https://github.com/cp6/corbp", children: "source code" })
        ] })
      ] }) })
    ] })
  ] });
}
function Card({ children, classname = "" }) {
  return /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 p-2 md:p-3 " + classname, children });
}
const slugify = (string) => {
  return string.normalize("NFKD").trim().toLowerCase().replace(/[^\w\s-]/g, "").replace("_", "-").replace(/[-\s]+/g, "-");
};
const asset = (directory, id, extension, size = "") => {
  if (size !== "") {
    size = "_" + size;
  }
  return route("home") + "/media/" + directory + "/" + id + size + "." + extension;
};
function LocationCard({ children, classname = "" }) {
  return /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden text-center rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 pt-2 " + classname, children });
}
function Dashboard$1(props) {
  const auth = usePage().props.auth;
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Home", header: "corbp", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "col-span-12", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-md md:text-lg text-gray-900 dark:text-gray-100", children: [
      props.count,
      " Images uploaded"
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-3 mb-2", children: "Most recent uploads" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-12 sm:gap-4", children: props.latest.map(
      (media) => /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-3", children: /* @__PURE__ */ jsx("a", { href: route("media.show", media.id), children: /* @__PURE__ */ jsx("img", { src: asset(media.directory.name, media.id, media.extension, "SMALL"), alt: media.title_desc.title + " image", title: "view " + media.title_desc.title, className: "rounded-md" }) }) }, media.id)
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-4", children: "Random locations" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-12 sm:gap-4", children: props.random.locations.map(
      (location) => /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-3 mt-2", children: /* @__PURE__ */ jsx("a", { href: route("locations.show", location.slug), className: "text-gray-800 dark:text-gray-200", children: /* @__PURE__ */ jsxs(LocationCard, { children: [
        location.name,
        (() => {
          if (location.random_image !== null) {
            return /* @__PURE__ */ jsx("img", { src: asset(location.random_image.directory.name, location.random_image.id, location.random_image.extension, "SMALL"), alt: "Image for " + location.name, title: "View images for " + location.name, className: "rounded-b-md mt-2 object-cover" });
          }
        })()
      ] }) }) }, location.id)
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-4", children: "Random devices" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-12 sm:gap-4", children: props.random.devices.map(
      (device) => /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-3 mt-2", children: /* @__PURE__ */ jsx("a", { href: route("device.show", device.slug), className: "text-gray-800 dark:text-gray-200", children: /* @__PURE__ */ jsx(Card, { children: device.name }) }) }, device.id)
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-4", children: "Random tags" }),
    /* @__PURE__ */ jsx("div", { className: "", children: props.random.tags.map(
      (tag) => /* @__PURE__ */ jsxs("p", { className: "inline mr-1", children: [
        /* @__PURE__ */ jsx("a", { href: route("tag.show", tag.slug), className: "text-gray-800 dark:text-gray-200 italic hover:text-gray-900 hover:dark:text-gray-100", children: tag.name }),
        " "
      ] }, tag.id)
    ) })
  ] }) }) });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard$1
}, Symbol.toStringTag, { value: "Module" }));
function ResponseText({ recentlySuccessful, response }) {
  return /* @__PURE__ */ jsx(
    Transition,
    {
      show: recentlySuccessful,
      duration: 5,
      enterFrom: "opacity-0",
      leaveTo: "opacity-0",
      className: "transition ease-in-out duration-1000",
      children: /* @__PURE__ */ jsx(
        "p",
        {
          className: (() => {
            if (response !== null) {
              if (response.type === "success") {
                return "text-sm text-green-500";
              } else {
                return "text-sm text-red-500";
              }
            }
          })(),
          children: response === null ? null : response.message
        }
      )
    }
  );
}
function BackButton({ link, text }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: link,
      className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      children: [
        /* @__PURE__ */ jsx(HiArrowLeft, { className: "inline mr-1 mb-1 text-white" }),
        text
      ]
    }
  );
}
function Edit$4(props) {
  const auth = props.auth;
  const response = props.response;
  const resource = props.resource;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: resource.name,
    short_name: resource.short_name || "",
    slug: resource.slug || "",
    brand: resource.brand || "",
    model: resource.model || ""
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("device.update", resource.id));
  };
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Edit device " + resource.name, header: "Edit device: " + resource.name, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    /* @__PURE__ */ jsx(BackButton, { text: "Back to device", link: route("device.show", resource.slug) }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Device name" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "short_name", value: "Short name" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.short_name,
              onChange: (e) => setData("short_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.short_name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "slug", value: "Slug" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.slug,
              onChange: (e) => setData("slug", slugify(e.target.value))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.slug })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "brand", value: "Brand" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.brand,
              onChange: (e) => setData("brand", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.area })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "model", value: "Model" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.model,
              onChange: (e) => setData("model", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.model })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "mt-4 px-6", children: "Update" }),
        /* @__PURE__ */ jsx(ResponseText, { recentlySuccessful, response })
      ] })
    ] }) })
  ] }) });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$4
}, Symbol.toStringTag, { value: "Module" }));
function PaginationPage({ url, label, active }) {
  if (active) {
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: url,
        "aria-current": "page",
        className: "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
        children: label
      }
    ) });
  } else {
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: url,
        className: "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        children: label
      }
    ) });
  }
}
function Pagination({ data, showInfo = true }) {
  if (data.length === 0) {
    return /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-400 mb-2", children: [
      "Showing ",
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "font-semibold text-gray-900 dark:text-white",
          children: "1"
        }
      ),
      " to ",
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "font-semibold text-gray-900 dark:text-white",
          children: "1"
        }
      ),
      " of ",
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "font-semibold text-gray-900 dark:text-white",
          children: "0"
        }
      ),
      " Entries"
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col mt-2", children: [
    (() => {
      if (showInfo) {
        return /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-400 mb-2", children: [
          "Showing ",
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-semibold text-gray-900 dark:text-white",
              children: data.from
            }
          ),
          " to ",
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-semibold text-gray-900 dark:text-white",
              children: data.to
            }
          ),
          " of ",
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-semibold text-gray-900 dark:text-white",
              children: data.total
            }
          ),
          " Entries"
        ] });
      }
    })(),
    /* @__PURE__ */ jsx("div", { className: "inline-flex mt-2 xs:mt-0", children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "inline-flex -space-x-px", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: data.prev_page_url,
          className: "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          children: "Previous"
        }
      ) }),
      (() => {
        if (data.current_page > 2) {
          return /* @__PURE__ */ jsx(
            PaginationPage,
            {
              url: "?page=" + (data.current_page - 2),
              label: data.current_page - 2,
              active: false
            }
          );
        }
      })(),
      (() => {
        if (data.prev_page_url !== null) {
          return /* @__PURE__ */ jsx(
            PaginationPage,
            {
              url: data.prev_page_url,
              label: data.current_page - 1,
              active: false
            }
          );
        }
      })(),
      /* @__PURE__ */ jsx(PaginationPage, { label: data.current_page, active: true }),
      (() => {
        if (data.next_page_url !== null) {
          return /* @__PURE__ */ jsx(
            PaginationPage,
            {
              url: data.next_page_url,
              label: data.current_page + 1,
              active: false
            }
          );
        }
      })(),
      (() => {
        if (data.current_page + 2 <= data.last_page) {
          return /* @__PURE__ */ jsx(
            PaginationPage,
            {
              url: "?page=" + (data.current_page + 2),
              label: data.current_page + 2,
              active: false
            }
          );
        }
      })(),
      (() => {
        if (data.current_page + 3 <= data.last_page) {
          return /* @__PURE__ */ jsx(
            PaginationPage,
            {
              url: "?page=" + (data.current_page + 3),
              label: data.current_page + 3,
              active: false
            }
          );
        }
      })(),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: data.next_page_url,
          className: "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          children: "Next"
        }
      ) })
    ] }) }) })
  ] });
}
function Index$3(props) {
  const auth = usePage().props.auth;
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Devices", header: "Devices", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-2 sm:grid-cols-6 sm:gap-4", children: props.devices.data.map(
      (device) => /* @__PURE__ */ jsx("a", { href: route("device.show", device.slug), children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-semibold text-gray-800 dark:text-white", children: [
          device.name,
          " ",
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-light text-gray-500 dark:text-gray-400",
              children: device.media_count
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-gray-700 dark:text-gray-300", children: device.state })
      ] }) }, device.id)
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2", children: /* @__PURE__ */ jsx(Pagination, { data: props.devices }) })
  ] }) });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
function Show$4(props) {
  return /* @__PURE__ */ jsx(MainLayout, { auth: props.auth, title: props.device.name, header: props.device.name, response: props.response, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: (() => {
    if (props.auth.user !== null) {
      return /* @__PURE__ */ jsx(EditButton, { text: "Edit device", link: route("device.edit", props.device.slug) });
    }
  })() }) });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$4
}, Symbol.toStringTag, { value: "Module" }));
function Edit$3(props) {
  const auth = props.auth;
  const response = props.response;
  const resource = props.resource;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: resource.name,
    short_name: resource.short_name || "",
    slug: resource.slug || "",
    brand: resource.brand || "",
    model: resource.model || "",
    min_mm: resource.min_mm || "",
    max_mm: resource.max_mm || "",
    min_aperture: resource.min_aperture || "",
    max_aperture: resource.max_aperture || ""
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("lens.update", resource.id));
  };
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Edit lens " + resource.name, header: "Edit lens: " + resource.name, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    /* @__PURE__ */ jsx(BackButton, { text: "Back to lens", link: route("lens.show", resource.slug) }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Device name" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "short_name", value: "Short name" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.short_name,
              onChange: (e) => setData("short_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.short_name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "slug", value: "Slug" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.slug,
              onChange: (e) => setData("slug", slugify(e.target.value))
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.slug })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "brand", value: "Brand" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.brand,
              onChange: (e) => setData("brand", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.area })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "model", value: "Model" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.model,
              onChange: (e) => setData("model", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.model })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "min_mm", value: "min mm" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "number",
              value: data.min_mm,
              onChange: (e) => setData("min_mm", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.min_mm })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "max_mm", value: "max mm" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "number",
              value: data.max_mm,
              onChange: (e) => setData("max_mm", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.max_mm })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "min_aperture", value: "min aperture" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "number",
              value: data.min_aperture,
              onChange: (e) => setData("min_aperture", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.min_aperture })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "max_aperture", value: "max aperture" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "number",
              value: data.max_aperture,
              onChange: (e) => setData("max_aperture", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.max_aperture })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "mt-4 px-6", children: "Update" }),
        /* @__PURE__ */ jsx(ResponseText, { recentlySuccessful, response })
      ] })
    ] }) })
  ] }) });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$3
}, Symbol.toStringTag, { value: "Module" }));
function Index$2(props) {
  const auth = usePage().props.auth;
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Lens", header: "Lens", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-2 sm:grid-cols-4 sm:gap-4", children: props.lens.data.map(
      (lense) => /* @__PURE__ */ jsx("a", { href: route("lens.show", lense.slug), children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-semibold text-gray-800 dark:text-white", children: [
          lense.name,
          " ",
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-light text-gray-500 dark:text-gray-400",
              children: lense.media_count
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-gray-700 dark:text-gray-300", children: lense.state })
      ] }) }, lense.id)
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2", children: /* @__PURE__ */ jsx(Pagination, { data: props.lens }) })
  ] }) });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
function Show$3(props) {
  return /* @__PURE__ */ jsx(MainLayout, { auth: props.auth, title: props.lens.name, header: props.lens.name, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: (() => {
    if (props.auth.user !== null) {
      return /* @__PURE__ */ jsx(EditButton, { text: "Edit lens", link: route("lens.edit", props.lens.slug) });
    }
  })() }) });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$3
}, Symbol.toStringTag, { value: "Module" }));
function Create$1(props) {
  const auth = usePage().props.auth;
  const response = props.response;
  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    name: "",
    state: "Victoria",
    area: "",
    postcode: "",
    lat: "",
    lon: "",
    country: "Australia",
    country_code: "AUS"
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("locations.store"));
  };
  const callGeoApi = () => {
    fetch(route("api.geo.query"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + auth.user.api_token
      },
      body: JSON.stringify({
        "location": data.name + ", " + data.state + ", " + data.country
      })
    }).then((response2) => response2.json()).then((response2) => {
      setData((data2) => ({ ...data2, country: response2.data[0].country }));
      setData((data2) => ({ ...data2, country_code: response2.data[0].country_code }));
      setData((data2) => ({ ...data2, lat: response2.data[0].latitude }));
      setData((data2) => ({ ...data2, lon: response2.data[0].longitude }));
      setData((data2) => ({ ...data2, area: response2.data[0].administrative_area }));
      setData((data2) => ({ ...data2, state: response2.data[0].region }));
    });
  };
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Add location", header: "Add a location", response, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Location name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "area", value: "Area" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.area,
            onChange: (e) => setData("area", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.area })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "state", value: "State" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.state,
            onChange: (e) => setData("state", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.state })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "postcode", value: "Postcode" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "number",
            value: data.postcode,
            onChange: (e) => setData("postcode", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.postcode })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "country", value: "Country" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.country,
            onChange: (e) => setData("country", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.country })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "country_code", value: "Country code" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.country_code,
            onChange: (e) => setData("country_code", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.country_code })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "lat", value: "LAT" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.lat,
            onChange: (e) => setData("lat", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.lat })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "lon", value: "LON" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "number",
            value: data.lon,
            onChange: (e) => setData("lon", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.lon })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { value: "Fetch GEO data & fill" }),
        /* @__PURE__ */ jsx(
          HiDownload,
          {
            className: "h-6 w-6 mt-2 text-gray-600 dark:text-white inline hover:cursor-pointer",
            onClick: callGeoApi,
            title: "Fetch GEO data from location name field"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "mt-4 px-6", children: "Create" }),
      /* @__PURE__ */ jsx(
        Transition,
        {
          show: recentlySuccessful,
          duration: 5,
          enterFrom: "opacity-0",
          leaveTo: "opacity-0",
          className: "transition ease-in-out duration-1000",
          children: /* @__PURE__ */ jsx(
            "p",
            {
              className: (() => {
                if (response !== null) {
                  if (response.type === "success") {
                    return "text-sm text-green-500";
                  } else {
                    return "text-sm text-red-500";
                  }
                }
              })(),
              children: response === null ? null : response.message
            }
          )
        }
      )
    ] })
  ] }) }) }) });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$1
}, Symbol.toStringTag, { value: "Module" }));
function Edit$2(props) {
  const auth = usePage().props.auth;
  const response = props.response;
  const resource = props.resource;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: resource.name,
    state: resource.state || "",
    area: resource.area || "",
    postcode: resource.postcode || "",
    lat: resource.lat || "",
    lon: resource.lon || "",
    country: resource.country || "",
    country_code: resource.country_code || ""
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("locations.update", resource.id));
  };
  const callGeoApi = () => {
    fetch(route("api.geo.query"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + auth.user.api_token
      },
      body: JSON.stringify({
        "location": data.name + ", " + data.state + ", " + data.country
      })
    }).then((response2) => response2.json()).then((response2) => {
      setData((data2) => ({ ...data2, country: response2.data[0].country }));
      setData((data2) => ({ ...data2, country_code: response2.data[0].country_code }));
      setData((data2) => ({ ...data2, lat: response2.data[0].latitude }));
      setData((data2) => ({ ...data2, lon: response2.data[0].longitude }));
      setData((data2) => ({ ...data2, area: response2.data[0].administrative_area }));
      setData((data2) => ({ ...data2, state: response2.data[0].region }));
    });
  };
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Edit location " + resource.name, header: "Edit location: " + resource.name, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Location name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "area", value: "Area" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.area,
            onChange: (e) => setData("area", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.area })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "state", value: "State" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.state,
            onChange: (e) => setData("state", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.state })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "postcode", value: "Postcode" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "number",
            value: data.postcode,
            onChange: (e) => setData("postcode", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.postcode })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "country", value: "Country" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.country,
            onChange: (e) => setData("country", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.country })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "country_code", value: "Country code" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.country_code,
            onChange: (e) => setData("country_code", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.country_code })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "lat", value: "LAT" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.lat,
            onChange: (e) => setData("lat", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.lat })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "lon", value: "LON" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "number",
            value: data.lon,
            onChange: (e) => setData("lon", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.lon })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-1", children: [
        /* @__PURE__ */ jsx(InputLabel, { value: "Fetch GEO data & fill" }),
        /* @__PURE__ */ jsx(
          HiDownload,
          {
            className: "h-6 w-6 mt-2 text-gray-600 dark:text-white inline hover:cursor-pointer",
            onClick: callGeoApi,
            title: "Fetch GEO data from location name field"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "mt-4 px-6", children: "Update" }),
      /* @__PURE__ */ jsx(ResponseText, { recentlySuccessful, response })
    ] })
  ] }) }) }) });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$2
}, Symbol.toStringTag, { value: "Module" }));
function CreateButton({ link, text }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: link,
      className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      children: [
        /* @__PURE__ */ jsx(HiPlus, { className: "inline mr-1 mb-1 text-white" }),
        text
      ]
    }
  );
}
function Index$1(props) {
  return /* @__PURE__ */ jsx(MainLayout, { auth: props.auth, title: "Locations", header: "Locations", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    (() => {
      if (props.auth.user !== null) {
        return /* @__PURE__ */ jsx(CreateButton, { text: "Add a location", link: route("locations.create") });
      }
    })(),
    /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-2 sm:grid-cols-4 sm:gap-4", children: props.locations.data.map(
      (location) => /* @__PURE__ */ jsx("a", { href: route("locations.show", location.slug), children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-semibold text-gray-800 dark:text-white", children: [
          location.name,
          " ",
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-light text-gray-500 dark:text-gray-400",
              children: location.media_count
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-gray-700 dark:text-gray-300", children: location.state })
      ] }) }, location.id)
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2", children: /* @__PURE__ */ jsx(Pagination, { data: props.locations }) })
  ] }) });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
function Show$2(props) {
  return /* @__PURE__ */ jsx(MainLayout, { auth: props.auth, title: props.location.name + " images", header: props.location.name, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    (() => {
      if (props.auth.user !== null) {
        return /* @__PURE__ */ jsx(EditButton, { text: "Edit location", link: route("locations.edit", props.location.slug) });
      }
    })(),
    (() => {
      if (props.media.length > 0) {
        return /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-12 sm:gap-4", children: props.media.map(
          (media) => /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-3", children: /* @__PURE__ */ jsx("a", { href: route("media.show", media.id), children: /* @__PURE__ */ jsx("img", { src: asset(media.directory.name, media.id, media.extension, "SMALL"), alt: media.title_desc.title + " image", title: "view " + media.title_desc.title, className: "rounded-md" }) }) }, media.id)
        ) });
      } else {
        return /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "No images found for this location" });
      }
    })()
  ] }) });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$2
}, Symbol.toStringTag, { value: "Module" }));
function Edit$1(props) {
  const auth = props.auth;
  const response = props.response;
  const resource = props.media;
  const tags_assigned = props.media.tags;
  const locations = props.locations;
  const tags = props.tags;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    slug: resource.slug || "",
    location_id: resource.location_id || "",
    title: resource.title_desc.title || "",
    description: resource.title_desc.description || "",
    tag1: typeof tags_assigned[0] !== "undefined" ? tags_assigned[0].tag_id : "",
    tag2: typeof tags_assigned[1] !== "undefined" ? tags_assigned[1].tag_id : "",
    tag3: typeof tags_assigned[2] !== "undefined" ? tags_assigned[2].tag_id : "",
    tag4: typeof tags_assigned[3] !== "undefined" ? tags_assigned[3].tag_id : "",
    tag5: typeof tags_assigned[4] !== "undefined" ? tags_assigned[4].tag_id : "",
    tag6: typeof tags_assigned[5] !== "undefined" ? tags_assigned[5].tag_id : ""
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("media.update", resource.id));
  };
  return /* @__PURE__ */ jsx(
    MainLayout,
    {
      auth,
      title: "Edit media " + resource.title_desc.title,
      header: "Edit: " + resource.title_desc.title,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
        /* @__PURE__ */ jsx(BackButton, { text: "Back to media", link: route("media.show", resource.id) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "slug", value: "Slug" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.slug,
                  onChange: (e) => setData("slug", slugify(e.target.value)),
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.slug })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-4", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: "Title" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.title,
                  onChange: (e) => setData("title", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.title })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-6", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "description", value: "Description" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.description,
                  onChange: (e) => setData("description", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-6", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "location_id", value: "Location" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  onChange: (e) => setData("location_id", e.target.value),
                  name: "location_id",
                  value: data.location_id,
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "None" }),
                    locations.map((location) => /* @__PURE__ */ jsx(
                      "option",
                      {
                        value: location.id,
                        children: location.name
                      },
                      location.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.location_id })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-medium text-sm text-gray-700 dark:text-gray-300 mt-1 md:mt-0", children: "Tags" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 md:gap-4 mb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  onChange: (e) => setData("tag1", e.target.value),
                  name: "tag1",
                  value: data.tag1,
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    tags.map((tag) => /* @__PURE__ */ jsx(
                      "option",
                      {
                        value: tag.id,
                        children: tag.name
                      },
                      tag.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.tag1 })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  onChange: (e) => setData("tag2", e.target.value),
                  name: "tag2",
                  value: data.tag2,
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    tags.map((tag) => /* @__PURE__ */ jsx(
                      "option",
                      {
                        value: tag.id,
                        children: tag.name
                      },
                      tag.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.tag2 })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  onChange: (e) => setData("tag3", e.target.value),
                  name: "tag3",
                  value: data.tag3,
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    tags.map((tag) => /* @__PURE__ */ jsx(
                      "option",
                      {
                        value: tag.id,
                        children: tag.name
                      },
                      tag.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.tag3 })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  onChange: (e) => setData("tag4", e.target.value),
                  name: "tag4",
                  value: data.tag4,
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    tags.map((tag) => /* @__PURE__ */ jsx(
                      "option",
                      {
                        value: tag.id,
                        children: tag.name
                      },
                      tag.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.tag4 })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  onChange: (e) => setData("tag5", e.target.value),
                  name: "tag5",
                  value: data.tag5,
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    tags.map((tag) => /* @__PURE__ */ jsx(
                      "option",
                      {
                        value: tag.id,
                        children: tag.name
                      },
                      tag.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.tag5 })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  onChange: (e) => setData("tag6", e.target.value),
                  name: "tag6",
                  value: data.tag6,
                  className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    tags.map((tag) => /* @__PURE__ */ jsx(
                      "option",
                      {
                        value: tag.id,
                        children: tag.name
                      },
                      tag.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.tag6 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "mt-4 px-6", children: "Update" }),
            /* @__PURE__ */ jsx(ResponseText, { recentlySuccessful, response })
          ] })
        ] }) })
      ] })
    }
  );
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
function ImageCard({ children, classname = "" }) {
  return /* @__PURE__ */ jsx("div", { className: "rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 pb-2 md:pb-3 " + classname, children });
}
function ExifLine({ exif }) {
  {
    if (exif !== null) {
      return /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-300 mr-2", children: [
        /* @__PURE__ */ jsx(
          HiCog,
          {
            className: "h-5 w-5 mr-1 mb-1 inline text-gray-400"
          }
        ),
        exif.f_stop_raw,
        " ",
        exif.focal_length,
        "mm ",
        exif.shutter_speed_raw,
        " ISO ",
        exif.iso
      ] });
    }
  }
}
function DescLine({ desc }) {
  {
    if (desc !== null) {
      return /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-300 ml-2", children: [
        /* @__PURE__ */ jsx(
          HiExclamationCircle,
          {
            className: "h-5 w-5 mr-1 mb-1 inline text-gray-400"
          }
        ),
        desc
      ] });
    }
  }
}
function DeviceLine({ device }) {
  {
    if (device !== null) {
      return /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
        /* @__PURE__ */ jsx(
          HiCamera,
          {
            className: "h-5 w-5 mr-1 mb-1 inline text-gray-400"
          }
        ),
        device.device.name,
        " with ",
        device.lens.name
      ] });
    }
  }
}
function DateLine({ date }) {
  {
    if (date !== null) {
      return /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-300 mr-2", children: [
        /* @__PURE__ */ jsx(HiCalendar, { className: "h-5 w-5 mr-1 mb-1 inline text-gray-400" }),
        format(new Date(date), "do LLLL yyyy hh:mm:ss a ")
      ] });
    }
  }
}
function LocationLine({ data }) {
  {
    const location_text = data.location !== null ? /* @__PURE__ */ jsx("a", { href: route("locations.show", data.location.slug), children: data.location.name }) : "";
    const sub_location_text = data.sub_location !== null ? /* @__PURE__ */ jsx("a", { href: route("locations.show", data.sub_location_id), children: data.sub_location.name }) : "";
    return /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
      /* @__PURE__ */ jsx(
        HiGlobe,
        {
          className: "h-5 w-5 mr-1 mb-1 inline text-gray-400"
        }
      ),
      location_text,
      " ",
      sub_location_text
    ] });
  }
}
function TagsLoop({ tags }) {
  {
    const tags_amount = tags.length;
    if (tags_amount > 0) {
      return /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-300 ml-2", children: [
        /* @__PURE__ */ jsx(HiTag, { className: "h-5 w-5 mr-1 mb-1 inline text-gray-400" }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-gray-800 dark:text-gray-200 italic hover:text-gray-900 hover:dark:text-gray-100",
            children: tags.map(
              (tag, i) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: route("tag.show", tag.tag.slug),
                  children: [
                    tag.tag.name,
                    i === tags_amount - 1 ? "." : ", "
                  ]
                },
                tag.id
              )
            )
          }
        )
      ] });
    }
  }
}
function SimilarImagesLoop({ current_id, similar }) {
  {
    let loop_count = 0;
    return /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-12 sm:gap-4", children: similar.map((media) => {
      if (loop_count <= 4 && media.id !== current_id) {
        loop_count++;
        return /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-3", children: /* @__PURE__ */ jsx("a", { href: route("media.show", media.id), children: /* @__PURE__ */ jsx(
          "img",
          {
            src: asset(media.directory.name, media.id, media.extension, "SMALL"),
            alt: media.title_desc.title + " image",
            title: "view " + media.title_desc.title,
            className: "rounded-md"
          }
        ) }) }, media.id);
      }
    }) });
  }
}
function Show$1(props) {
  const media = props.media;
  return /* @__PURE__ */ jsx(MainLayout, { auth: props.auth, title: media.title_desc.title, header: media.title_desc.title, media: true, media_id: media.id, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    /* @__PURE__ */ jsx(ImageCard, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-12 mb-2", children: /* @__PURE__ */ jsx("a", { href: asset(media.directory.name, media.id, media.extension), children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-full rounded-md",
          src: asset(media.directory.name, media.id, media.extension, "MEDIUM"),
          title: media.title_desc.title,
          alt: media.title_desc.title
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4 text-start ml-2", children: /* @__PURE__ */ jsx(LocationLine, { data: media }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4 md:text-end", children: /* @__PURE__ */ jsx(DateLine, { date: media.exif.captured_at }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6 text-start ml-2", children: /* @__PURE__ */ jsx(DeviceLine, { device: media.exif }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6 md:text-end", children: /* @__PURE__ */ jsx(ExifLine, { exif: media.exif }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12", children: /* @__PURE__ */ jsx(DescLine, { desc: media.title_desc.description }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12", children: /* @__PURE__ */ jsx(TagsLoop, { tags: media.tags }) })
    ] }) }),
    (() => {
      if (props.similar.length > 0) {
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100 tracking-wide mb-2", children: "Similar images" }),
          /* @__PURE__ */ jsx(SimilarImagesLoop, { current_id: props.media.id, similar: props.similar })
        ] });
      }
    })()
  ] }) });
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
function Authenticated({ auth, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex", children: /* @__PURE__ */ jsx(NavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                auth.user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "pt-2 pb-3 space-y-1", children: /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: auth.user.name }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: auth.user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
          ] })
        ] })
      ] })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsx(
              Dialog.Panel,
              {
                className: `mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Delete Account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Are you sure you want to delete your account?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ml-3", disabled: processing, children: "Delete Account" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: () => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Update Password" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Ensure your account is using a long, random password to stay secure." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "current_password", value: "Current Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "New Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({ mustVerifyEmail, status, className }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Profile Information" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Update your account's profile information and email address." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Dashboard() {
  const auth = usePage().props.auth;
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Stats", header: "Stats" });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
function Create(props) {
  const auth = usePage().props.auth;
  const response = props.response;
  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    name: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("tag.store"));
  };
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Add tag", header: "Add a tag", response, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Tag name" }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          value: data.name,
          onChange: (e) => setData("name", e.target.value),
          required: true
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.name })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "mt-4 px-6", children: "Create" }),
      /* @__PURE__ */ jsx(
        Transition,
        {
          show: recentlySuccessful,
          duration: 5,
          enterFrom: "opacity-0",
          leaveTo: "opacity-0",
          className: "transition ease-in-out duration-1000",
          children: /* @__PURE__ */ jsx(
            "p",
            {
              className: (() => {
                if (response !== null) {
                  if (response.type === "success") {
                    return "text-sm text-green-500";
                  } else {
                    return "text-sm text-red-500";
                  }
                }
              })(),
              children: response === null ? null : response.message
            }
          )
        }
      )
    ] })
  ] }) }) }) });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
function Index(props) {
  const auth = usePage().props.auth;
  const tags = props.tags;
  const tags_amount = tags.length;
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Image tags", header: "Image tags", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
    (() => {
      if (props.auth.user !== null) {
        return /* @__PURE__ */ jsx(CreateButton, { text: "Add a tag", link: route("tag.create") });
      }
    })(),
    (() => {
      if (tags_amount > 0) {
        return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-gray-800 dark:text-gray-200 italic hover:text-gray-900 hover:dark:text-gray-100",
            children: tags.map(
              (tag, i) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: route("tag.show", tag.slug),
                  children: [
                    tag.name,
                    i === tags_amount - 1 ? "." : ", "
                  ]
                },
                tag.id
              )
            )
          }
        ) });
      }
    })()
  ] }) });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
function Show(props) {
  const media = props.media;
  return /* @__PURE__ */ jsx(
    MainLayout,
    {
      auth: props.auth,
      title: props.resource.name + " tagged images",
      header: props.resource.name + " tagged images",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: [
        (() => {
          if (props.auth.user !== null) {
            return /* @__PURE__ */ jsx(EditButton, { text: "Edit tag", link: route("tag.edit", props.resource.slug) });
          }
        })(),
        (() => {
          if (media.length > 0) {
            return /* @__PURE__ */ jsx("div", { className: "grid gap-2 grid-cols-12 sm:gap-4", children: media.map(
              (med) => /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-3", children: /* @__PURE__ */ jsx("a", { href: route("media.show", med.id), children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: asset(med.media.directory.name, med.media.id, med.media.extension, "SMALL"),
                  alt: med.media.title_desc.title + " image",
                  title: "view " + med.media.title_desc.title,
                  className: "rounded-md"
                }
              ) }) }, med.id)
            ) });
          } else {
            return /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "No images found for this tag" });
          }
        })()
      ] })
    }
  );
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
function ProgressBar({ progress, completed, toBeCompleted }) {
  if (progress !== null) {
    return /* @__PURE__ */ jsx("div", { className: "w-full mt-2", children: /* @__PURE__ */ jsx("div", { className: "shadow w-full bg-gray-200 dark:bg-gray-500", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `bg-blue-500 text-sm leading-none py-1 text-center text-white rounded-sm`,
        style: { width: progress + "%" },
        children: [
          progress,
          "% ",
          completed,
          "/",
          toBeCompleted
        ]
      }
    ) }) });
  } else {
    return /* @__PURE__ */ jsx("div", { className: "w-full my-6" });
  }
}
function Upload() {
  const auth = usePage().props.auth;
  const response = usePage().props.response;
  const locations = usePage().props.locations;
  const upload_size = usePage().props.upload_size;
  const files_upload = usePage().props.files_upload;
  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    location_id: "",
    files: []
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadCompletedCount, setUploadCompletedCount] = useState(0);
  const [uploadCount, setUploadCount] = useState(0);
  const submit = (e) => {
    e.preventDefault();
    post(route("upload.handle"), {
      onStart: (startEvent) => {
        setUploading(true);
      },
      onFinish: (finishEvent) => {
        setUploading(false);
      }
    });
  };
  async function getUploadProgressValue() {
    const result = await axios.get(route("upload.progress"));
    return await result.data;
  }
  useEffect(
    () => {
      let interval;
      if (uploading) {
        interval = setInterval(() => {
          getUploadProgressValue().then((the_response) => {
            setUploadProgress(the_response.progress);
            setUploadCompletedCount(the_response.completed_files);
            setUploadCount(the_response.total_files);
          });
        }, 500);
      } else if (!uploading) {
        setUploadProgress(null);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    },
    [uploading]
  );
  return /* @__PURE__ */ jsx(MainLayout, { auth, title: "Upload", header: "Upload media files", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs("p", { className: "text-yellow-600 dark:text-yellow-400", children: [
      "Your max file upload size is ",
      /* @__PURE__ */ jsx("b", { children: upload_size }),
      " and max files in single request is ",
      /* @__PURE__ */ jsx("b", { children: files_upload }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-6 md:col-span-3", children: [
          /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Image files" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              name: "files",
              multiple: true,
              onChange: (e) => setData("files", e.target.files),
              className: "block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.files })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-6 md:col-span-3", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-2 block", children: /* @__PURE__ */ jsx(InputLabel, { htmlFor: "location_id", value: "Location" }) }),
          /* @__PURE__ */ jsx(
            "select",
            {
              onChange: (e) => setData("location_id", e.target.value),
              name: "location_id",
              value: data.location_id,
              required: true,
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              children: locations.map((location) => /* @__PURE__ */ jsx(
                "option",
                {
                  value: location.id,
                  children: location.name
                },
                location.id
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1 md:col-span-6", children: /* @__PURE__ */ jsx(ProgressBar, { progress: uploadProgress, completed: uploadCompletedCount, toBeCompleted: uploadCount }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "mt-4 px-6", children: "Upload" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            duration: 5,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out duration-1000",
            children: /* @__PURE__ */ jsx(
              "p",
              {
                className: (() => {
                  if (response !== null) {
                    if (response.type === "success") {
                      return "text-sm text-green-500";
                    } else {
                      return "text-sm text-red-500";
                    }
                  }
                })(),
                children: response === null ? null : response.message
              }
            )
          }
        )
      ] })
    ] })
  ] }) }) });
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Upload
}, Symbol.toStringTag, { value: "Module" }));
const Ziggy = { "url": "https://corbp.test", "port": null, "defaults": {}, "routes": { "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "ignition.healthCheck": { "uri": "_ignition/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition/update-config", "methods": ["POST"] }, "api.geo.query": { "uri": "api/geo", "methods": ["POST"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "random": { "uri": "random", "methods": ["GET", "HEAD"] }, "media.show": { "uri": "m/{media}", "methods": ["GET", "HEAD"], "bindings": { "media": "id" } }, "stats": { "uri": "stats", "methods": ["GET", "HEAD"] }, "locations.index": { "uri": "locations", "methods": ["GET", "HEAD"] }, "locations.create": { "uri": "locations/create", "methods": ["GET", "HEAD"] }, "locations.show": { "uri": "locations/{location}", "methods": ["GET", "HEAD"], "bindings": { "location": "slug" } }, "sub-location.index": { "uri": "sub-locations", "methods": ["GET", "HEAD"] }, "sub-location.create": { "uri": "sub-locations/create", "methods": ["GET", "HEAD"] }, "sub-location.show": { "uri": "sub-locations/{subLocation}", "methods": ["GET", "HEAD"], "bindings": { "subLocation": "slug" } }, "device.index": { "uri": "devices", "methods": ["GET", "HEAD"] }, "device.show": { "uri": "devices/{device}", "methods": ["GET", "HEAD"], "bindings": { "device": "slug" } }, "lens.index": { "uri": "lens", "methods": ["GET", "HEAD"] }, "lens.show": { "uri": "lens/{lens}", "methods": ["GET", "HEAD"], "bindings": { "lens": "slug" } }, "tag.index": { "uri": "tags", "methods": ["GET", "HEAD"] }, "tag.create": { "uri": "tags/create", "methods": ["GET", "HEAD"] }, "tag.show": { "uri": "tags/{tag}", "methods": ["GET", "HEAD"], "bindings": { "tag": "slug" } }, "profile.edit": { "uri": "profile", "methods": ["GET", "HEAD"] }, "profile.update": { "uri": "profile", "methods": ["PATCH"] }, "profile.destroy": { "uri": "profile", "methods": ["DELETE"] }, "media.edit": { "uri": "m/{media}/edit", "methods": ["GET", "HEAD"], "bindings": { "media": "id" } }, "media.update": { "uri": "m/{media}", "methods": ["PATCH"], "bindings": { "media": "id" } }, "locations.store": { "uri": "locations", "methods": ["POST"] }, "locations.edit": { "uri": "locations/{location}/edit", "methods": ["GET", "HEAD"], "bindings": { "location": "slug" } }, "locations.update": { "uri": "locations/{location}", "methods": ["PATCH"], "bindings": { "location": "id" } }, "locations.destroy": { "uri": "locations/{location}", "methods": ["DELETE"], "bindings": { "location": "id" } }, "sub-location.store": { "uri": "sub-locations", "methods": ["POST"] }, "sub-location.edit": { "uri": "sub-locations/{subLocation}/edit", "methods": ["GET", "HEAD"], "bindings": { "subLocation": "slug" } }, "sub-location.update": { "uri": "sub-locations/{subLocation}", "methods": ["PATCH"], "bindings": { "subLocation": "id" } }, "sub-location.destroy": { "uri": "sub-locations/{subLocation}", "methods": ["DELETE"], "bindings": { "subLocation": "id" } }, "device.store": { "uri": "devices", "methods": ["POST"] }, "device.edit": { "uri": "devices/{device}/edit", "methods": ["GET", "HEAD"], "bindings": { "device": "slug" } }, "device.update": { "uri": "devices/{device}", "methods": ["PATCH"], "bindings": { "device": "id" } }, "device.destroy": { "uri": "devices/{device}", "methods": ["DELETE"], "bindings": { "device": "id" } }, "lens.store": { "uri": "lens", "methods": ["POST"] }, "lens.edit": { "uri": "lens/{lens}/edit", "methods": ["GET", "HEAD"], "bindings": { "lens": "slug" } }, "lens.update": { "uri": "lens/{lens}", "methods": ["PATCH"], "bindings": { "lens": "id" } }, "lens.destroy": { "uri": "lens/{lens}", "methods": ["DELETE"], "bindings": { "lens": "id" } }, "tag.store": { "uri": "tags", "methods": ["POST"] }, "tags.edit": { "uri": "tags/{tag}/edit", "methods": ["GET", "HEAD"], "bindings": { "tag": "slug" } }, "tag.update": { "uri": "tags/{tag}", "methods": ["PATCH"], "bindings": { "tag": "id" } }, "tag.destroy": { "uri": "tags/{tag}", "methods": ["DELETE"], "bindings": { "tag": "id" } }, "upload": { "uri": "upload", "methods": ["GET", "HEAD"] }, "upload.progress": { "uri": "upload/progress", "methods": ["GET", "HEAD"] }, "upload.handle": { "uri": "upload", "methods": ["POST"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"] }, "password.store": { "uri": "reset-password", "methods": ["POST"] }, "verification.notice": { "uri": "verify-email", "methods": ["GET", "HEAD"] }, "verification.verify": { "uri": "verify-email/{id}/{hash}", "methods": ["GET", "HEAD"] }, "verification.send": { "uri": "email/verification-notification", "methods": ["POST"] }, "password.confirm": { "uri": "confirm-password", "methods": ["GET", "HEAD"] }, "password.update": { "uri": "password", "methods": ["PUT"] }, "logout": { "uri": "logout", "methods": ["POST"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
const appName = "corbp";
createServer((page) => {
  createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_1, "./Pages/Auth/Login.jsx": __vite_glob_0_2, "./Pages/Auth/Register.jsx": __vite_glob_0_3, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_4, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_5, "./Pages/Dashboard.jsx": __vite_glob_0_6, "./Pages/Devices/Edit.jsx": __vite_glob_0_7, "./Pages/Devices/Index.jsx": __vite_glob_0_8, "./Pages/Devices/Show.jsx": __vite_glob_0_9, "./Pages/Lens/Edit.jsx": __vite_glob_0_10, "./Pages/Lens/Index.jsx": __vite_glob_0_11, "./Pages/Lens/Show.jsx": __vite_glob_0_12, "./Pages/Location/Create.jsx": __vite_glob_0_13, "./Pages/Location/Edit.jsx": __vite_glob_0_14, "./Pages/Location/Index.jsx": __vite_glob_0_15, "./Pages/Location/Show.jsx": __vite_glob_0_16, "./Pages/Media/Edit.jsx": __vite_glob_0_17, "./Pages/Media/Show.jsx": __vite_glob_0_18, "./Pages/Profile/Edit.jsx": __vite_glob_0_19, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_20, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_21, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_22, "./Pages/Stats.jsx": __vite_glob_0_23, "./Pages/Tag/Create.jsx": __vite_glob_0_24, "./Pages/Tag/Index.jsx": __vite_glob_0_25, "./Pages/Tag/Show.jsx": __vite_glob_0_26, "./Pages/Upload.jsx": __vite_glob_0_27 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => {
      global.route = (name, params, absolute, config = Ziggy) => route$1(name, params, absolute, config);
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  });
});
