import {helloWorldAPI} from "@/app/api/tests/helloworld";

export default async function HelloWorldPage() {
    const helloWorldFromAPI = await helloWorldAPI.getMessage();
    console.log("[helloWorldFromAPI]:", helloWorldFromAPI);
    if (!helloWorldFromAPI) {
        return (<div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Failed to load data from API</h1>
            </div>
        </div>
        )
    }
    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">{helloWorldFromAPI}</h1>
            </div>
        </div>
    )
}