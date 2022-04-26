import React, { useState } from "react";
import AccordionContents from "./AccordionContents";

function Accordion({ items }) {
	const [openIndexes, setOpenIndex] = useState([0]);

	return (
		<div>
			{items.map((item, index) => (
				<div key={index}>
					<button onClick={() => setOpenIndex([index])}>{item.title}</button>
					{openIndexes.includes(index) ? (
						<AccordionContents>{item.contents}</AccordionContents>
					) : null}
				</div>
			))}
		</div>
	);
}

export default Accordion;
