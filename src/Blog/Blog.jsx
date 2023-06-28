const Blog = () => {
  return (
    <div className="p-5 mt-5">
      <h1 className="text-5xl font-bold text-center underline">Blogs</h1>
      <div className="bg-gray-200 text-black my-12">
        <div className="container max-w-4xl px-10 py-6 mx-auto">
          <div className="mt-3 border-2 p-4 border-white shadow-md rounded-lg">
            <h4 className="text-3xl font-bold hover:underline">
              What is the differences between uncontrolled and controlled
              components.
            </h4>
            <p className="mt-2">
              <span className="font-bold">Uncontrolled components: </span>{" "}
              Uncontrolled components refer to components that manage their own
              state internally. They use a ref to access the DOM element's
              current value and update the state accordingly. A controlled
              functional component is a component that receives its current
              value and update callback via props. <br />
              <span className="font-bold">Controlled components: </span>A
              controlled component is a component that renders form elements and
              controls them by keeping the form data in the component's state.
              In a controlled component, the form element's data is handled by
              the React component (not DOM) and kept in the component's state.
            </p>
          </div>
          <div className="mt-3  border-2 p-4 border-white shadow-md rounded-lg">
            <h4 className="text-3xl font-bold hover:underline">
              How to validate React props using PropTypes
            </h4>

            <p className="mt-2">
              Props are an important mechanism for passing the read-only
              attributes to React components. The props are usually required to
              use correctly in the component. If it is not used correctly, the
              components may not behave as expected. Hence, it is required to
              use props validation in improving react components.Props
              validation is a tool that will help the developers to avoid future
              bugs and problems. It is a useful way to force the correct usage
              of your components. It makes your code more readable. React
              components used special property PropTypes that help you to catch
              bugs by validating data types of values passed through props,
              although it is not necessary to define components with propTypes.
              However, if you use propTypes with your components, it helps you
              to avoid unexpected bugs.
            </p>
          </div>
          <div className="mt-3  border-2 p-4 border-white shadow-md rounded-lg">
            <p className="text-3xl font-bold hover:underline">
              Tell us the difference between nodejs and express js.
            </p>
            <p className="mt-2">
              NodeJS is a javascript runtime environment for running JavaScript
              programs and is used to build server-side applications. ExpressJS
              is a web framework that enables you to design a web application to
              handle a variety of different HTTP demands. You can use NodeJS to
              build a multi-user, real-time web service.
            </p>
          </div>
          <div className="mt-3  border-2 p-4 border-white shadow-md rounded-lg">
            <p className="text-3xl font-bold hover:underline">
              What is a custom hook, and why will you create a custom hook?
            </p>
            <h5 className="font-bold text-2xl my-2 underline">
              Definition Of custom hook.
            </h5>
            <p className="mt-2">
              A custom Hook is a JavaScript function whose name starts with
              ”use” and that may call other Hooks. That's it! If you have code
              in a component that you feel would make sense to extract, either
              for reuse elsewhere or to keep the component simpler, you can pull
              that out into a function.
            </p>
            <h5 className="font-bold text-2xl my-2 underline">
              why will you create a custom hook?
            </h5>
            <p className="mt-2">
              Creating custom Hooks in React allows developers to encapsulate
              and reuse logic within functional components. It promotes code
              reusability, readability, and maintainability by abstracting away
              complex logic into reusable units.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
