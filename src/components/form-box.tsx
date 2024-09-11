import React, { ReactNode } from 'react';

type Props = {
  label?: string;
  children?: ReactNode;
};

const FormBox = (props: Props) => {
  return (
    <div className="flex flex-col py-2">
      {props?.label && <label className="text-base text-white my-2">{props.label}</label>}
      {props.children}
    </div>
  );
};

export default FormBox;
