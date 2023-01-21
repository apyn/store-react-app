import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div class=" rounded-md w-full h-auto p-20">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-blue-600 text-9xl">404</h1>

        <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          Page not found
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">
          صفحه ای که به دنبال آن بودید وجود ندارد{' '}
        </p>

        <Link to="/"
          class="px-6 py-3 text-sm font-bold text-blue-800 bg-white rounded-md hover:text-rose-600"
        >
         برو به خانه
        </Link>
      </div>
    </div>
  )
}

export default NotFound
