import { RedirectBtn } from "@/components/buttons/redirectBtn";
import { SignUpForm } from "./SignUpForm";


export default function SignUp(){
    return (
        <main className="w-full h-screen flex items-center justify-center relative">
            <RedirectBtn />
            <SignUpForm />
        </main>
    )
}