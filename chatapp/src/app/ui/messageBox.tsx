export function CreateMessageBox({message}: {message: string}) {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default function MessageBoxList({messageList}: {messageList: string[]}) {
    return (
        <>
            {messageList.map((message) => <CreateMessageBox key={message} message={message}/>)}
        </>
    )
}