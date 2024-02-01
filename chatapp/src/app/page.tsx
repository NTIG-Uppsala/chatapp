import TextForm from "./ui/textForm";
import MessageBoxList from "./ui/messageBox";

export default function Home() {
    const messageList:string[] = ["Hello", "Tjena", "Hej", "Hejdå"]
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h1 className="text-6xl font-bold text-gray-800">Welcome to ChatApp</h1>
				<p className="text-xl text-gray-600">Chat with your friends</p>
			</div>
			<div>
				<MessageBoxList messageList={messageList}/> 
			</div>
			<div>
				<TextForm />
			</div>
		</main>
	);
}
