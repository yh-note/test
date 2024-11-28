import { useState, useEffect } from "react"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/components/auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */

// Custom Hook: 시간을 업데이트하는 로직을 분리
const useCoreTimer = () => {
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString()
    )

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(intervalId) // 클린업 함수
    }, [])

    return { currentTime }
}

// Clock 컴포넌트
export default function Clock() {
    const { currentTime } = useCoreTimer()

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: "center", color: "#333" }}>
                내가 만든 코드 컴포넌트 Clock
            </h1>
            <h2 style={timeStyle}>현재 시간: {currentTime}</h2>
        </div>
    )
}

// 스타일 오브젝트
const containerStyle = {
    border: "2px solid #ccc",
    borderRadius: "15px",
    padding: "20px",
    backgroundColor: "#f0f8ff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

const timeStyle = {
    fontSize: "2em",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "center",
}
