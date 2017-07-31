module.exports = {
	/* Determine if array of numbers is arithmetric or geometric or none */

	aritGeo: (value) => {

		//use the first two elements in the array to find a common difference
		const [firstTerm, secondTerm] = value;
		const commonDiff = secondTerm - firstTerm;

		//if array is empty
		if ( value.length === 0) {
			return 0;
		}
		for (let i = 1; i < value.length - 1; i++) {

			//find the difference of elements
			const difference = value[i + 1] - value[i];

			//compare if the difference is common for all elements
			if (commonDiff === difference) {
				continue;
			}else{return geometricOrNot(value)}
		}
        return 'Aritmetic'
         
        //It determines if array of numbers is geometric or not
        function geometricOrNot(value) {

        	//use the first and second element to find a common ratio
        	const [firstTerm, secondTerm] = value;
            const commonRatio = secondTerm / firstTerm;
            
            for(let i = 1; i < value.length - 1; i++) {
            	const ratio = value[i + 1] / value[i];

            	//Find the common ratio for all elements
            	if(commonRatio === ratio) {
            		continue;
            	}else{return -1}
            }
            return 'Geometric';
        }
	}
}
