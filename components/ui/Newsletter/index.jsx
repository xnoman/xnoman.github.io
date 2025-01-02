"use client"
import Button from "../Button"
import Input from "../Input"

const Newsletter = () => {
    return (
        <div className="mt-6 md:mt-0">
            <h2 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                Sign up for our newsletter.
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex items-center gap-x-3">
                <div className="relative">
                    <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <Input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-3 focus:border-blue-600"
                    />
                </div>
                <Button className="block w-auto text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg">
                    Subscribe
                </Button>
            </form>
        </div>
    )
}

export default Newsletter