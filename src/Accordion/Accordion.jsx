import React, { useState } from "react";
import AccordionContents from "./AccordionContents";

function Accordion({ items }) {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<div>
			{items.map((item, index) => (
				<div key={index}>
					<button onClick={() => setOpenIndex(index)}>{item.title}</button>
					{index === openIndex ? (
						<AccordionContents>{item.contents}</AccordionContents>
					) : null}
				</div>
			))}
		</div>
	);
}

export default Accordion;
