import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = props => {
	return (
		<div className="background">
			<PrettyChatWindow
				projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
				username={props.user.username}
				secret={props.user.secret}
				style={{ height: "100vh" }}
			/>
		</div>
	)
}

export default ChatsPage
