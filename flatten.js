/*
* Non recursive flatten deep using a stack.
* Please note that slice will clone the Array object itself: array contents
* however are copied by reference and are not deep cloned.
* Easiest way to deep clone Array or Object:
* JSON.parse(JSON.stringify(original_array))
-
 note: falsy arg return an empty array.
*/

const flatten = (input,filter=false) => {
	const result=[], {isArray,prototype:{push}}=Array;
	if(isArray(input)){
		if(input.length){
			const stack=input.slice(0);
			eval(`while(stack.length){
				const e=stack.pop();
				if(isArray(e)){
					push.apply(stack,e)
				}else${ filter ?' if(filter(e))':''}{
					result.unshift(e)
				}
			}`)
		}
	}else if(input){
		result[0]=input
	};
	return result
};