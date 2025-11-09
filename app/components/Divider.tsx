interface DividerProps {
    width?: string;
    className?: string;
}

export default function Divider({ width = "w-24", className = "bg-purple-600" }: DividerProps) {
    return (
        <div className={`${width} h-1 ${className} mx-auto mb-6 rounded-full`}></div>
    );
}
