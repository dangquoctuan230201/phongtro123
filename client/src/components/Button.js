import React,{memo} from 'react';


const Button = ({ text, textColor, bgColor, IcAfter, onClick, fulWidth }) => {

	return (
		<button
			type="button"
      className={`p-2 ${textColor} ${bgColor} ${fulWidth} outline-none rounded-md hover:underline flex justify-center items-center gap-1`}
      onClick={onClick}
		>
			<span>{text}</span>
			<span>{IcAfter && <IcAfter />}</span>
		</button>
	);
};

export default memo(Button);
