import React from 'react';

interface Props<T> {
  data: T[];
  emtpyText: string;
  Component: React.FC<{ item: T }>;
}
const RenderData = <T,>({
  Component,
  data,
  emtpyText
}: Props<T>) => {
  if (data.length === 0)
    return <p
      className='text-center text-lg font-bold text-gray-400 mt-48'
    >{emtpyText}</p>
  return (
    data.map((item, index) => (
      <React.Fragment key={index}>
        <Component item={item} />
      </React.Fragment>
    ))
  )
}

export default RenderData