export default function CertificateTypeManager({ children }) {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 mt-24 justify-center items-center ">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
