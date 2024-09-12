import { Button } from "@/components/ui/button";
import { SignInForm } from "./SignInForm";
import { RedirectBtn } from "../../../components/buttons/redirectBtn";

export default function SignIn(){
    return (
        <main className="w-full h-screen flex items-center justify-center relative">
            <RedirectBtn />
            <SignInForm />
        </main>
    )
}