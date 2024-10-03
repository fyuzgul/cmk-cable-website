export default function Manager({ children }) {
  return (
    <>
      <section className="bg-grayLight dark:bg-grayLight p-3 sm:p-5 mt-24 justify-center items-center ">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-grayLight relative shadow-md sm:rounded-lg overflow-hidden">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
