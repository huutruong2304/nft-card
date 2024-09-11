import React from 'react';

type Props = {
  id?: number | string;
  label: string;
};

const AppTag = (props: Props) => {
  return (
    <div className="w-fit text-base text-white px-3 py-1 rounded-md" style={{ backgroundColor: '#16eb14' }}>
      {props.label}
    </div>
  );
};

export default AppTag;
