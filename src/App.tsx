import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="max-w-xl mx-auto w-full">
      <div className="flex justify-center my-12">
        <div className="bg-[#3c3b48] w-full lg:w-12/12 p-5 rounded-lg shadow-xl shadow-black">
          <h3 className="pt-4 pb-4 text-2xl text-center font-bold text-[#d1d1d1]">
            Create New Account
          </h3>
          <Form />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
