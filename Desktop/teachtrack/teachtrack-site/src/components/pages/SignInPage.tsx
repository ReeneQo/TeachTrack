import { SignIn } from "@clerk/clerk-react"

export function SignInPage(){
    return (
        <>
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-black/70">
        <SignIn/>
        </div>
        
        </>
    )
}