type LiveTextProps = {
  title: string
  text: string
  time: string
  date: string
  isLiveShow?: boolean

  dotSize?: number 
}

export default function LiveText({
  title,
  text,
  time,
  date,
  isLiveShow = false,
  dotSize = 16,
}: LiveTextProps) {
  return (
    <div className="relative ml-10 border-b border-[#D4D4D4] pb-4 md:pb-6">
      
      <h5 className="mb-2 text-sm font-semibold sm:text-[17px] sm:leading-6">
        {title}
      </h5>

      <div className="mb-3 flex items-center gap-2">
        <span className="text-[#525252]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>

        <p className="text-sm leading-5.5 text-[#525252]">
          সময় - <span>{time}, {date}</span>
        </p>
      </div>

      {text && (
        <p className="text-base text-[#171717] sm:text-lg sm:leading-7">
          {text}
        </p>
      )}

      <span className="absolute top-0 -left-9 sm:-left-12 z-20 inline-flex items-center gap-3">
        <span className="relative inline-flex items-center justify-center">

          {isLiveShow && (
            <span
              className="absolute inline-flex animate-ping rounded-full bg-red-500 opacity-30"
              style={{
                width: dotSize,
                height: dotSize,
              }}
            />
          )}

          <span
            className="relative inline-flex rounded-full bg-red-500"
            style={{
              width: dotSize,
              height: dotSize,
            }}
          />
        </span>
      </span>

    </div>
  )
}
