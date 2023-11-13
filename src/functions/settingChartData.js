import { convertDate } from "./convertDate"

export const settingChatData = (setChartData, prices) => {
    setChartData({
        labels: prices.map((data) => convertDate(data[0])),
        datasets: [
            {
                data: prices.map((data) => data[1]),
                borderColor: "#3a80e9",
                borderWidth: 2,
                fill: true,
                tension: 0,
                backgroundColor: prices ? "transparent" : "rgba(58,128,233,0.1)",
                pointRadius: 0
            }
        ]
    })
}