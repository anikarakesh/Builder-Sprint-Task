"use client";

import { useMemo } from "react";
import { Text } from "../primitives/Typography";
import { formatNumber } from "../../lib/utils";

export interface DataPoint {
  label: string;
  value: number;
  date?: string;
}

export interface LineChartProps {
  data: DataPoint[];
  title?: string;
  height?: number;
  color?: string;
  showGrid?: boolean;
  showDots?: boolean;
  className?: string;
}

export function LineChart({ 
  data, 
  title, 
  height = 200, 
  color = "var(--color-primary-base)",
  showGrid = true,
  showDots = true,
  className = "" 
}: LineChartProps) {
  const { path, points, xLabels, yLabels, maxValue, minValue } = useMemo(() => {
    if (data.length === 0) {
      return { path: "", points: [], xLabels: [], yLabels: [], maxValue: 0, minValue: 0 };
    }

    const values = data.map(d => d.value);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue || 1;

    // Chart dimensions (accounting for margins)
    const chartWidth = 300;
    const chartHeight = height - 60; // Leave space for labels
    const marginLeft = 40;
    const marginTop = 20;

    // Calculate points
    const points = data.map((point, index) => {
      const x = marginLeft + (index / (data.length - 1)) * chartWidth;
      const y = marginTop + chartHeight - ((point.value - minValue) / range) * chartHeight;
      return { x, y, value: point.value, label: point.label };
    });

    // Create SVG path
    const path = points.reduce((path, point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${path} ${command} ${point.x} ${point.y}`;
    }, "");

    // Generate labels
    const xLabels = data.map((point, index) => ({
      x: marginLeft + (index / (data.length - 1)) * chartWidth,
      label: point.label
    }));

    // Y-axis labels (5 levels)
    const yLabels = Array.from({ length: 5 }, (_, i) => {
      const value = minValue + (range * i) / 4;
      const y = marginTop + chartHeight - (i / 4) * chartHeight;
      return { y, value, label: formatNumber(value) };
    });

    return { path, points, xLabels, yLabels, maxValue, minValue };
  }, [data, height]);

  const svgWidth = 380;
  const svgHeight = height;

  if (data.length === 0) {
    return (
      <div className={`border border-[--color-neutral-200] rounded-[var(--radius-lg)] p-6 ${className}`}>
        {title && (
          <Text weight="semibold" className="mb-4">{title}</Text>
        )}
        <div className="flex items-center justify-center h-48 text-[--color-neutral-500]">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className={`border border-[--color-neutral-200] rounded-[var(--radius-lg)] p-6 ${className}`}>
      {title && (
        <Text weight="semibold" className="mb-4">{title}</Text>
      )}
      
      <div className="w-full overflow-x-auto">
        <svg width={svgWidth} height={svgHeight} className="w-full">
          {/* Grid lines */}
          {showGrid && (
            <g className="opacity-20">
              {/* Horizontal grid lines */}
              {yLabels.map((label, index) => (
                <line
                  key={`h-grid-${index}`}
                  x1="40"
                  y1={label.y}
                  x2={svgWidth - 20}
                  y2={label.y}
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
              {/* Vertical grid lines */}
              {xLabels.map((label, index) => (
                <line
                  key={`v-grid-${index}`}
                  x1={label.x}
                  y1="20"
                  x2={label.x}
                  y2={height - 40}
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
            </g>
          )}
          
          {/* Y-axis labels */}
          {yLabels.map((label, index) => (
            <text
              key={`y-label-${index}`}
              x="35"
              y={label.y + 4}
              textAnchor="end"
              className="text-xs fill-[--color-neutral-600]"
            >
              {label.label}
            </text>
          ))}
          
          {/* Line path */}
          <path
            d={path}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          
          {/* Data points */}
          {showDots && points.map((point, index) => (
            <g key={`point-${index}`}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={color}
                className="drop-shadow-sm"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="2"
                fill="white"
              />
            </g>
          ))}
          
          {/* X-axis labels */}
          {xLabels.map((label, index) => (
            <text
              key={`x-label-${index}`}
              x={label.x}
              y={height - 10}
              textAnchor="middle"
              className="text-xs fill-[--color-neutral-600]"
            >
              {label.label}
            </text>
          ))}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[--color-neutral-200]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: color }}
            />
            <Text size="sm" color="muted">
              {data.length} data points
            </Text>
          </div>
        </div>
        <div className="text-right">
          <Text size="sm" color="muted">
            Range: {formatNumber(minValue)} - {formatNumber(maxValue)}
          </Text>
        </div>
      </div>
    </div>
  );
}

// Convenience component for trends
export function TrendChart({ data, ...props }: Omit<LineChartProps, "data"> & { data: Array<{ date: string; value: number; }> }) {
  const chartData = data.map(item => ({
    label: new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    value: item.value,
    date: item.date
  }));

  return <LineChart data={chartData} {...props} />;
}
