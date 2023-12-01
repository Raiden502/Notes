import React, { useState, useEffect } from "react";
import { io } from 'socket.io-client';
import {
	TextField,
	Button,
	Paper,
	Typography,
	Box,
	Container,
} from "@mui/material";


const SupportChatting = () => {
	const [socket, setSocket] = useState(null);
	const [messages, setMessages] = useState([]);
	const [inputMessage, setInputMessage] = useState("");
	const [userID, setUserId] = useState("");
	const [connect, setConnect] = useState(false);

	useEffect(() => {
		if (connect) {
			const socketIO = io(`http://localhost:5000/?userID=${userID}`);
			
			socketIO.on('message', (message) => {
				setMessages((prevMessages) => [...prevMessages, JSON.parse(message)]);
			});
			
			setSocket(socketIO);
			
			return () => {
				// Clean up the socket connection when the component unmounts
				socketIO.disconnect();
			};
		}
	}, [userID, connect]);

	const sendMessage = () => {
        const newMessage = {
            text: inputMessage,
        };

        // Send the message to the server
        socket.send(JSON.stringify(newMessage));

		// Clear the input field
		setInputMessage('');
	};
	
	console.log("message", messages)
	return (
		<Container maxWidth="sm" style={{ marginTop: "20px" }}>
			<Paper elevation={3} style={{ padding: "20px" }}>
				<Typography variant="h5">WebSocket Chat</Typography>
				<Box
					style={{
						display: "flex",
						flexDirection: "column",
						marginTop: "10px",
					}}
				>
					<div style={{ marginBottom: "10px" }}>
						{messages.map((msg, index) => (
							<div key={index} style={{ marginBottom: "8px" }}>
								<span
									style={{
										color: `hsl(${msg.color}, 70%, 50%)`,
									}}
								>
									{msg.sender}:
								</span>{" "}
								{msg.text}
							</div>
						))}
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<TextField
							label="UserID"
							variant="outlined"
							value={userID}
							onChange={(e) => setUserId(e.target.value)}
							style={{ marginRight: "10px" }}
						/>
						<Button
							variant="contained"
							color="primary"
							onClick={()=>{setConnect(true)}}
						>
							Connect
						</Button>
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<TextField
							label="Message"
							variant="outlined"
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
							style={{ marginRight: "10px" }}
						/>
						<Button
							variant="contained"
							color="primary"
							onClick={sendMessage}
						>
							Send
						</Button>
					</div>
				</Box>
			</Paper>
		</Container>
	);
};

export default SupportChatting;
