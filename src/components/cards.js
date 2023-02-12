export default function CardComponent() {
  return (
    <>
      <div className="rounded-lg shadow-md lg:max-w-sm">
        <div className="p-8 w-full">
          <div className="flex ">
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2 mt-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            <h4 className=" ml-2 text-xl font-semibold tracking-tight text-blue-600">
              Google
            </h4>
          </div>
          <p class="mt-8 mb-4 text-gray-700 text-base">
            Site URL: www.google.com
          </p>
          <p class=" text-gray-700 text-base">
            Username: joeytribbiani09@gmail.com
          </p>
          <p class="mb-4 text-gray-700 text-base">Password: *********</p>
          <div className="flex justify-end">
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              View Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
