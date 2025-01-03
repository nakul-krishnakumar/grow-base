import React from 'react'

const Ping = ({ isHidden }: { isHidden: boolean }) => {
  return (
    <div className="relative">
        <div className="absolute -left-4 top-1">
              { isHidden ? (
                <span className="flex size-[11px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-600 opacity-75"></span>
                  <span className="relative inline-flex size-[11px] rounded-full bg-slate-600"></span>
                </span>
              ) : (
                <span className="flex size-[11px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>
                </span>
              )}
        </div>
    </div>
  )
}

export default Ping;