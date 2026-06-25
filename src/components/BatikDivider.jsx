export default function BatikDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6" aria-hidden="true">
      <span className="h-px w-12 bg-emas/40" />
      <svg width="28" height="28" viewBox="0 0 28 28">
        <g fill="none" stroke="#B8872B" strokeWidth="1.2">
          <ellipse cx="14" cy="9" rx="4" ry="6" />
          <ellipse cx="19" cy="14" rx="6" ry="4" />
          <ellipse cx="14" cy="19" rx="4" ry="6" />
          <ellipse cx="9" cy="14" rx="6" ry="4" />
        </g>
        <circle cx="14" cy="14" r="1.4" fill="#B8872B" />
      </svg>
      <span className="h-px w-12 bg-emas/40" />
    </div>
  )
}