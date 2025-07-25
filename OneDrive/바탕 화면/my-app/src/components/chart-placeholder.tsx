"use client"

import { useEffect, useRef } from "react"

interface ChartPlaceholderProps {
  width?: number
  height?: number
  type?: "line" | "bar" | "pie" | "scatter"
  title?: string
}

export function ChartPlaceholder({
  width = 600,
  height = 350,
  type = "line",
  title = "Sample Chart",
}: ChartPlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Clear canvas
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, width, height)

    // Generate data that matches the image pattern
    const data = [95, 80, 85, 98, 95, 85, 80, 75]
    const labels = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]

    // Chart area
    const padding = 60
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Draw title
    ctx.fillStyle = "#333333"
    ctx.font = "bold 16px Roboto"
    ctx.textAlign = "center"
    ctx.fillText(title, width / 2, 30)

    if (type === "line") {
      drawLineChart(ctx, data, labels, padding, chartWidth, chartHeight)
    } else if (type === "bar") {
      drawBarChart(ctx, data, labels, padding, chartWidth, chartHeight)
    } else if (type === "pie") {
      drawPieChart(ctx, data, labels, width / 2, height / 2, Math.min(chartWidth, chartHeight) / 3)
    }

    // Draw axes and grid for line and bar charts
    if (type === "line" || type === "bar") {
      drawGrid(ctx, padding, chartWidth, chartHeight)
      drawAxes(ctx, labels, padding, chartWidth, chartHeight, width, height)
    }
  }, [width, height, type, title])

  const drawGrid = (ctx: CanvasRenderingContext2D, padding: number, chartWidth: number, chartHeight: number) => {
    ctx.strokeStyle = "#f0f0f0"
    ctx.lineWidth = 1

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i / 5) * chartHeight
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(padding + chartWidth, y)
      ctx.stroke()
    }

    // Vertical grid lines
    for (let i = 0; i <= 7; i++) {
      const x = padding + (i / 7) * chartWidth
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, padding + chartHeight)
      ctx.stroke()
    }
  }

  const drawLineChart = (
    ctx: CanvasRenderingContext2D,
    data: number[],
    labels: string[],
    padding: number,
    chartWidth: number,
    chartHeight: number,
  ) => {
    const maxValue = 100
    const minValue = 70

    // Draw line
    ctx.strokeStyle = "#00593d"
    ctx.lineWidth = 2
    ctx.beginPath()

    data.forEach((value, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = padding + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw data points
    data.forEach((value, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = padding + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight

      ctx.fillStyle = "#00593d"
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fill()
    })
  }

  const drawBarChart = (
    ctx: CanvasRenderingContext2D,
    data: number[],
    labels: string[],
    padding: number,
    chartWidth: number,
    chartHeight: number,
  ) => {
    const maxValue = Math.max(...data)
    const barWidth = (chartWidth / data.length) * 0.6
    const barSpacing = (chartWidth / data.length) * 0.4

    data.forEach((value, index) => {
      const x = padding + index * (chartWidth / data.length) + barSpacing / 2
      const barHeight = (value / maxValue) * chartHeight
      const y = padding + chartHeight - barHeight

      ctx.fillStyle = "#00593d"
      ctx.fillRect(x, y, barWidth, barHeight)
    })
  }

  const drawPieChart = (
    ctx: CanvasRenderingContext2D,
    data: number[],
    labels: string[],
    centerX: number,
    centerY: number,
    radius: number,
  ) => {
    const total = data.reduce((sum, value) => sum + value, 0)
    let currentAngle = -Math.PI / 2

    const colors = ["#00593d", "#004330", "#eaf8f3", "#e04141", "#b0b0b0", "#666666", "#111111", "#005259"]

    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI

      ctx.fillStyle = colors[index % colors.length]
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      currentAngle += sliceAngle
    })
  }

  const drawAxes = (
    ctx: CanvasRenderingContext2D,
    labels: string[],
    padding: number,
    chartWidth: number,
    chartHeight: number,
    width: number,
    height: number,
  ) => {
    ctx.strokeStyle = "#666666"
    ctx.lineWidth = 1

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, padding + chartHeight)
    ctx.stroke()

    // X-axis
    ctx.beginPath()
    ctx.moveTo(padding, padding + chartHeight)
    ctx.lineTo(padding + chartWidth, padding + chartHeight)
    ctx.stroke()

    // X-axis labels
    ctx.fillStyle = "#666666"
    ctx.font = "12px Roboto"
    ctx.textAlign = "center"
    labels.forEach((label, index) => {
      const x = padding + (index / (labels.length - 1)) * chartWidth
      ctx.fillText(label, x, height - 20)
    })

    // Y-axis labels
    ctx.textAlign = "right"
    for (let i = 0; i <= 5; i++) {
      const value = 70 + (30 / 5) * (5 - i)
      const y = padding + (i / 5) * chartHeight + 5
      ctx.fillText(`$${value.toFixed(0)}0,000`, padding - 10, y)
    }
  }

  return (
    <div className="rounded-lg overflow-hidden border border-brand-gray-light bg-white">
      <canvas ref={canvasRef} className="w-full h-auto" />
    </div>
  )
}
