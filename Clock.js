// Custom Hook: 시간을 업데이트하는 로직을 분리
const useCoreTimer = () => {
    const [currentTime, setCurrentTime] = React.useState(
        new Date().toLocaleTimeString()
    );

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return { currentTime };
};

// Clock 컴포넌트
function Clock() {
    const { currentTime } = useCoreTimer();

    return React.createElement(
        "div",
        { style: containerStyle },
        React.createElement(
            "h1",
            { style: { textAlign: "center", color: "#333" } },
            "내가 만든 코드 컴포넌트 Clock"
        ),
        React.createElement(
            "h2",
            { style: timeStyle },
            `현재 시간: ${currentTime}`
        )
    );
}

// 스타일 오브젝트
const containerStyle = {
    border: "2px solid #ccc",
    borderRadius: "15px",
    padding: "20px",
    backgroundColor: "#f0f8ff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const timeStyle = {
    fontSize: "2em",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "center",
};
