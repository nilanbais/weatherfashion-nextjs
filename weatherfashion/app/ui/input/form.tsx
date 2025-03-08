import Form from 'next/form'
import handleUserInput from '@/app/server/handlers';



export default function UserInputForm() {
    return (
        <Form action={handleUserInput}>
            <div className="space-y-4">
                {/* Height Field */}
                <div className="flex flex-col">
                    <label htmlFor="height" className="text-sm font-medium text-gray-700 mb-1">
                        Height (cm)
                    </label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        defaultValue={175}
                        placeholder="Enter height in cm"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Weight Field */}
                <div className="flex flex-col">
                    <label htmlFor="weight" className="text-sm font-medium text-gray-700 mb-1">
                        Weight (kg)
                    </label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        defaultValue={70}
                        placeholder="Enter weight in kg"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Age Field */}
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-sm font-medium text-gray-700 mb-1">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        defaultValue={30}
                        placeholder="Enter age in years"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Gender Field */}
                <div className="flex flex-col">
                    <label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-1">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="" disabled>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Submit
                    </button>

                </div>
            </div>



        </Form>
    );
};
